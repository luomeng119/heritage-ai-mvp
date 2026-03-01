import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

// 允许流式响应最长60秒
export const maxDuration = 60;

/**
 * 多模型API路由
 * 支持：OpenAI GPT-4, Claude 3, 百度文心, 阿里通义等
 * 
 * 使用方法：
 * POST /api/chat
 * Body: { message: string, model?: string }
 */
export async function POST(req: Request) {
  try {
    const { message, model = "openai" } = await req.json();

    // 系统提示词 - 非遗专家角色
    const systemPrompt = `你是一位专业的中国非物质文化遗产（非遗）文化专家助手。
你的名字叫"小韵"，性格温文尔雅，对传统文化充满热情。

你可以：
1. 详细介绍各类非遗技艺（剪纸、刺绣、年画、蜡染、泥塑等）
2. 讲述非遗背后的历史故事和文化内涵
3. 推荐适合不同场景的非遗纹样风格
4. 解答关于AI生成非遗图案的技术问题
5. 分享非遗保护和传承的知识

回答要：
- 准确专业，有文化底蕴
- 亲切友好，通俗易懂
- 适当使用emoji增加亲和力
- 回答控制在300字以内，重点突出`;

    let result;

    // 多模型路由
    switch (model) {
      case "openai":
        result = streamText({
          model: openai("gpt-4o-mini"),
          system: systemPrompt,
          prompt: message,
        });
        break;

      case "anthropic":
        result = streamText({
          model: anthropic("claude-3-haiku-20240307"),
          system: systemPrompt,
          prompt: message,
        });
        break;

      // TODO: 接入百度文心API
      case "baidu":
        // 预留接口
        throw new Error("百度文心API待接入，请先使用openai或anthropic");

      // TODO: 接入阿里通义API
      case "alibaba":
        // 预留接口
        throw new Error("阿里通义API待接入，请先使用openai或anthropic");

      default:
        result = streamText({
          model: openai("gpt-4o-mini"),
          system: systemPrompt,
          prompt: message,
        });
    }

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({
        error: "处理请求时出错",
        message: error instanceof Error ? error.message : "未知错误",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
