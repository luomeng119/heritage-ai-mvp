(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ChatAgent({ onClose }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "assistant",
            content: "你好！我是非遗文化助手小韵🎭\n\n我可以帮你：\n• 了解各种非遗文化知识\n• 介绍剪纸、刺绣、年画等传统艺术\n• 推荐适合你的非遗纹样风格\n• 解答关于AI生成的问题\n\n有什么想了解的非遗文化吗？"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAgent.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatAgent.useEffect"], [
        messages
    ]);
    const handleSend = async ()=>{
        if (!input.trim() || loading) return;
        const userMessage = input.trim();
        setInput("");
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: userMessage
                }
            ]);
        setLoading(true);
        // 模拟AI回复（后续可接入真实API）
        setTimeout(()=>{
            const responses = {
                剪纸: "剪纸是中国最古老的民间艺术之一，起源于汉代。主要流派有：\n• 北方剪纸：粗犷豪放\n• 南方剪纸：细腻秀丽\n• 陕西剪纸：造型夸张\n• 扬州剪纸：线条流畅",
                刺绣: "中国四大名绣：\n• 苏绣：精细雅洁\n• 湘绣：形象生动\n• 蜀绣：针法严谨\n• 粤绣：色彩富丽\n\n你想了解哪种刺绣呢？",
                年画: "年画是中国特有的绘画体裁，主要用于春节装饰。著名产地：\n• 天津杨柳青\n• 苏州桃花坞\n• 山东潍坊\n• 四川绵竹",
                你好: "你好！很高兴为你介绍非遗文化😊",
                谢谢: "不客气！有任何非遗相关问题随时问我~"
            };
            let reply = "这是个很好的问题！关于非遗文化，我还有很多可以分享的。\n\n你可以问我：\n• 某种非遗技艺的详细介绍\n• 不同地区的非遗特色\n• 如何欣赏传统纹样\n• 非遗与现代设计的结合";
            for (const [key, value] of Object.entries(responses)){
                if (userMessage.includes(key)) {
                    reply = value;
                    break;
                }
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: reply
                    }
                ]);
            setLoading(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-red-600 to-amber-500 p-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-white rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "w-5 h-5 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold",
                                        children: "非遗助手 · 小韵"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs opacity-80",
                                        children: "AI 智能体"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-white/80 hover:text-white transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50",
                children: [
                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "bg-red-100" : "bg-gradient-to-r from-red-500 to-amber-500"}`,
                                    children: msg.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-4 h-4 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.role === "user" ? "bg-red-600 text-white rounded-br-none" : "bg-white shadow-sm rounded-bl-none"}`,
                                    children: msg.content
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-sm rounded-2xl rounded-bl-none p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-5 h-5 animate-spin text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-white border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyDown: (e)=>e.key === "Enter" && handleSend(),
                            placeholder: "问我关于非遗的问题...",
                            className: "flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-red-500"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            disabled: loading || !input.trim(),
                            className: "p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ChatAgent, "qRoYw/UhkSHTbwdcJV1gMXoE+z4=");
_c = ChatAgent;
var _c;
__turbopack_context__.k.register(_c, "ChatAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatternGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const heritageStyles = [
    {
        id: "jianzhi",
        name: "剪纸",
        prompt: "traditional chinese paper-cut art"
    },
    {
        id: "xiuxiu",
        name: "刺绣",
        prompt: "chinese embroidery pattern"
    },
    {
        id: "nianhua",
        name: "年画",
        prompt: "chinese new year painting style"
    },
    {
        id: "laran",
        name: "蜡染",
        prompt: "chinese batik pattern"
    },
    {
        id: "nisu",
        name: "泥塑",
        prompt: "chinese clay figurine style"
    }
];
function PatternGenerator() {
    _s();
    const [selectedStyle, setSelectedStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(heritageStyles[0]);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedImage, setGeneratedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleGenerate = async ()=>{
        if (!prompt.trim()) return;
        setGenerating(true);
        // 模拟生成过程（后续接入真实AI API）
        setTimeout(()=>{
            // 使用占位图展示效果
            const placeholders = {
                剪纸: "https://images.unsplash.com/photo-1584650589355-e12c3643de91?w=512&h=512&fit=crop",
                刺绣: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=512&h=512&fit=crop",
                年画: "https://images.unsplash.com/photo-1548625361-7887bd6688d0?w=512&h=512&fit=crop",
                蜡染: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=512&h=512&fit=crop",
                泥塑: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=512&h=512&fit=crop"
            };
            setGeneratedImage(placeholders[selectedStyle.name] || placeholders["剪纸"]);
            setGenerating(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-lg border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b bg-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-600 mb-3",
                        children: "选择非遗风格："
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: heritageStyles.map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedStyle(style),
                                className: `px-4 py-2 rounded-full text-sm font-medium transition ${selectedStyle.id === style.id ? "bg-red-600 text-white" : "bg-white border hover:border-red-600 hover:text-red-600"}`,
                                children: style.name
                            }, style.id, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "描述你想要的图案："
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: prompt,
                                onChange: (e)=>setPrompt(e.target.value),
                                placeholder: `例如：${selectedStyle.name}风格的龙凤图案，红色为主，寓意吉祥如意...`,
                                className: "w-full px-4 py-3 border rounded-xl resize-none h-24 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleGenerate,
                                disabled: generating || !prompt.trim(),
                                className: "flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2",
                                children: generating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-5 h-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        "生成中..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        "生成",
                                        selectedStyle.name,
                                        "纹样"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            generatedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGeneratedImage(null),
                                className: "px-4 py-3 border rounded-xl hover:bg-slate-50 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            (generatedImage || generating) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-t bg-slate-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-600 mb-3",
                        children: "生成结果："
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md",
                        children: generating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-12 h-12 animate-spin text-red-600 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: [
                                            "AI正在创作",
                                            selectedStyle.name,
                                            "纹样...\\n"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-2",
                                        children: "（演示模式，后续接入真实AI API）"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this) : generatedImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: generatedImage,
                                    alt: "Generated pattern",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this),
                                            "下载图片"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : null
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-3 bg-amber-50 border-t text-xs text-amber-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 rounded-full bg-amber-500"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "当前为演示模式，已预留 OpenAI / Claude / 百度文心 / 阿里通义 API 接口"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(PatternGenerator, "t7TOYbFFw3qA4cipTbLrA+dGGw0=");
_c = PatternGenerator;
var _c;
__turbopack_context__.k.register(_c, "PatternGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$app$2f$components$2f$ChatAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/ChatAgent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$app$2f$components$2f$PatternGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/components/PatternGenerator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [showChat, setShowChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-8 h-8 text-red-500"
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            title: "AI纹样生成",
            desc: "输入描述，AI生成剪纸、刺绣等传统纹样"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-8 h-8 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            title: "非遗智能体",
            desc: "24小时非遗文化问答助手"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                className: "w-8 h-8 text-emerald-500"
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            title: "多模型支持",
            desc: "支持OpenAI、Claude、百度、阿里等AI模型"
        }
    ];
    const heritageTypes = [
        {
            name: "剪纸",
            color: "bg-red-100 text-red-700",
            desc: "中国传统民间艺术"
        },
        {
            name: "刺绣",
            color: "bg-pink-100 text-pink-700",
            desc: "苏绣湘绣蜀绣粤绣"
        },
        {
            name: "年画",
            color: "bg-amber-100 text-amber-700",
            desc: "门神福字迎新春"
        },
        {
            name: "蜡染",
            color: "bg-blue-100 text-blue-700",
            desc: "苗族传统技艺"
        },
        {
            name: "泥塑",
            color: "bg-orange-100 text-orange-700",
            desc: "天津泥人张等"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-slate-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-8 h-8 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent",
                                        children: "纹韵AI"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#generator",
                                        className: "text-gray-600 hover:text-red-600 transition",
                                        children: "纹样生成"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#heritage",
                                        className: "text-gray-600 hover:text-red-600 transition",
                                        children: "非遗百科"
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowChat(!showChat),
                                        className: "flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            "问非遗助手"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-bold mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-red-600 via-amber-500 to-red-600 bg-clip-text text-transparent",
                                children: "AI 赋能非遗文化传承"
                            }, void 0, false, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                            children: "使用人工智能技术生成传统非遗纹样，让千年文化在数字时代焕发新生"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#generator",
                                    className: "px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        "开始创作"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowChat(true),
                                    className: "px-8 py-4 border-2 border-gray-200 rounded-full font-medium hover:border-red-600 hover:text-red-600 transition",
                                    children: "咨询非遗助手"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: f.icon
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: f.title
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: f.desc
                                    }, void 0, false, {
                                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "generator",
                className: "py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "AI 纹样生成器"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "选择非遗风格，描述你想要的图案，AI为你生成"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$app$2f$components$2f$PatternGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "heritage",
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center mb-12",
                            children: "支持的非遗类型"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                            children: heritageTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 rounded-xl text-center cursor-pointer hover:scale-105 transition ${type.color}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold mb-1",
                                            children: type.name
                                        }, void 0, false, {
                                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm opacity-80",
                                            children: type.desc
                                        }, void 0, false, {
                                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, type.name, true, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "多模型支持"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8",
                            children: "预留多厂商API接口，灵活切换AI模型"
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: [
                                "OpenAI GPT-4",
                                "Claude 3",
                                "百度文心",
                                "阿里通义",
                                "讯飞星火",
                                "智谱GLM"
                            ].map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-4 py-2 bg-white border rounded-full text-sm text-gray-600",
                                    children: model
                                }, model, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 px-4 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-6 h-6 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: "纹韵AI"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-red-600 transition",
                                    children: "关于我们"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-red-600 transition",
                                    children: "使用条款"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-red-600 transition",
                                    children: "隐私政策"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$openclaw$2f$agents$2f$ceo$2f$workspace$2f$mvp$2d$demo$2f$my$2d$app$2f$app$2f$components$2f$ChatAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowChat(false)
            }, void 0, false, {
                fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
                lineNumber: 176,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.openclaw/agents/ceo/workspace/mvp-demo/my-app/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Home, "qpcmUuAyD2DiuaTqZ3tcN8AbPik=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_openclaw_agents_ceo_workspace_mvp-demo_my-app_app_897bf701._.js.map