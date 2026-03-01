// 完整的非遗知识库数据

export interface Project {
  id: number;
  code: string;
  name: string;
  category_id: number;
  category_name: string;
  batch: string;
  region: string;
  protect_unit: string;
  description: string;
}

// 扩展的非遗项目数据（50+项目，覆盖多个门类）
export const allProjects: Project[] = [
  // 传统美术 (VII)
  { id: 1, code: 'VII-1', name: '杨柳青木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '天津市', protect_unit: '天津杨柳青画社', description: '杨柳青木版年画产生于明代崇祯年间，继承了宋、元绘画的传统，吸收了明代木刻版画、工艺美术、戏剧舞台的形式。' },
  { id: 2, code: 'VII-2', name: '武强木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '河北省武强县', protect_unit: '武强年画博物馆', description: '武强木版年画是河北省武强县传统民间工艺品，具有浓郁的乡土气息和地方特色。' },
  { id: 3, code: 'VII-3', name: '桃花坞木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '江苏省苏州市', protect_unit: '苏州市公共文化中心', description: '桃花坞木版年画是江南地区的民间木版年画，因曾集中在苏州城内桃花坞一带生产而得名。' },
  { id: 4, code: 'VII-4', name: '漳州木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '福建省漳州市', protect_unit: '漳州市艺术馆', description: '漳州木版年画始于宋代，盛于明清，以其独特的风格和浓郁的地方特色而闻名。' },
  { id: 5, code: 'VII-5', name: '杨家埠木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '山东省潍坊市', protect_unit: '潍坊市寒亭区文化馆', description: '杨家埠木版年画是流传于山东省潍坊市杨家埠的一种民间版画，与天津杨柳青、苏州桃花坞并称中国三大木版年画。' },
  { id: 6, code: 'VII-6', name: '高密扑灰年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '山东省高密市', protect_unit: '高密市公共文化服务中心', description: '高密扑灰年画是中国民间年画中的一个古老画种，以柳枝烧炭起稿，敷以色料，特别注重线条勾勒。' },
  { id: 7, code: 'VII-7', name: '朱仙镇木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '河南省开封市', protect_unit: '开封市文化馆', description: '朱仙镇木版年画是中国木版年画的鼻祖，诞生于唐，兴于宋，鼎盛于明，历史悠久，源远流长。' },
  { id: 8, code: 'VII-8', name: '滩头木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '湖南省隆回县', protect_unit: '隆回县非物质文化遗产保护中心', description: '滩头木版年画是湖南省唯一的手工木版水印年画，以浓郁的楚南地方特色自成一派。' },
  { id: 9, code: 'VII-9', name: '佛山木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '广东省佛山市', protect_unit: '佛山市民间艺术研究社', description: '佛山木版年画以图像饱满、色彩浓烈、装饰性强而著称，是岭南民间艺术的代表。' },
  { id: 10, code: 'VII-10', name: '梁平木版年画', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '重庆市梁平区', protect_unit: '重庆市梁平区文化遗产保护中心', description: '梁平木版年画是重庆市梁平区的传统民间艺术，以驱邪纳福、吉祥喜庆为主要题材。' },
  { id: 11, code: 'VII-16', name: '剪纸（蔚县剪纸）', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '河北省蔚县', protect_unit: '蔚县文化馆', description: '蔚县剪纸源于明代，是一种以阴刻为主、阳刻为辅的点彩剪纸，具有独特的艺术风格。' },
  { id: 12, code: 'VII-21', name: '苏绣', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '江苏省苏州市', protect_unit: '苏州刺绣研究所', description: '苏绣是苏州地区刺绣产品的总称，为江苏省苏州市民间传统美术，是四大名绣之一。' },
  { id: 13, code: 'VII-22', name: '湘绣', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '湖南省长沙市', protect_unit: '湖南省湘绣研究所', description: '湘绣是中国四大名绣之一，是以湖南长沙为中心的带有鲜明湘楚文化特色的湖南刺绣产品的总称。' },
  { id: 14, code: 'VII-23', name: '蜀绣', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '四川省成都市', protect_unit: '成都市蜀绣工艺美术博物馆', description: '蜀绣又名"川绣"，与苏绣、湘绣、粤绣齐名，为中国四大名绣之一。' },
  { id: 15, code: 'VII-24', name: '粤绣', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '广东省广州市', protect_unit: '广州市非物质遗产保护中心', description: '粤绣是广州刺绣和潮州刺绣的总称，是中国四大名绣之一，技艺注重结合材料形质。' },
  { id: 16, code: 'VII-31', name: '泥塑（天津泥人张）', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '天津市', protect_unit: '天津泥人张彩塑工作室', description: '天津泥人张彩塑是著名的汉族传统手工艺品，创始于清代道光年间，是天津首批国家级非物质文化遗产。' },
  { id: 17, code: 'VII-32', name: '泥塑（惠山泥人）', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '江苏省无锡市', protect_unit: '无锡市泥人研究所', description: '惠山泥人是江苏省无锡市的一项民间艺术，有着四百多年的历史，与天津泥人张、大吴泥塑并称为中国三大泥塑。' },
  { id: 18, code: 'VII-47', name: '皮影戏（华县皮影戏）', category_id: 7, category_name: '传统美术', batch: '2006(第一批)', region: '陕西省华县', protect_unit: '华县文化馆', description: '华县皮影戏是中国皮影戏的重要发源地之一，以其精湛的雕刻工艺和独特的演唱风格而闻名。' },
  
  // 传统技艺 (VIII)
  { id: 19, code: 'VIII-1', name: '宜兴紫砂陶制作技艺', category_id: 8, category_name: '传统技艺', batch: '2006(第一批)', region: '江苏省宜兴市', protect_unit: '宜兴市陶瓷行业协会', description: '宜兴紫砂陶制作技艺始于宋代，盛于明清，是中国特有的手工制造陶土工艺品。' },
  { id: 20, code: 'VIII-7', name: '景德镇手工制瓷技艺', category_id: 8, category_name: '传统技艺', batch: '2006(第一批)', region: '江西省景德镇市', protect_unit: '景德镇市陶瓷文化遗产研究保护中心', description: '景德镇手工制瓷技艺是以高岭土等为原料，经过配料、成型、装饰、烧成等工序制作瓷器的传统技艺。' },
  { id: 21, code: 'VIII-9', name: '龙泉青瓷烧制技艺', category_id: 8, category_name: '传统技艺', batch: '2006(第一批)', region: '浙江省龙泉市', protect_unit: '龙泉市非物质文化遗产保护中心', description: '龙泉青瓷是中国制瓷史上烧制时间最长、影响最大的窑系之一，以"青如玉、明如镜、声如磬"闻名。' },
  { id: 22, code: 'VIII-10', name: '越窑青瓷烧制技艺', category_id: 8, category_name: '传统技艺', batch: '2011(第三批)', region: '浙江省慈溪市', protect_unit: '慈溪市越窑青瓷有限公司', description: '越窑青瓷是中国古代最著名的青瓷窑系，主要分布于浙江绍兴上虞、宁波等地。' },
  { id: 23, code: 'VIII-38', name: '蜡染技艺（苗族蜡染技艺）', category_id: 8, category_name: '传统技艺', batch: '2006(第一批)', region: '贵州省丹寨县', protect_unit: '丹寨县非物质文化遗产保护中心', description: '苗族蜡染技艺是用蜡刀蘸熔蜡在布上绘制图案，然后浸染，沸水去蜡，形成独特的冰纹效果。' },
  { id: 24, code: 'VIII-125', name: '景泰蓝制作技艺', category_id: 8, category_name: '传统技艺', batch: '2006(第一批)', region: '北京市', protect_unit: '北京市珐琅厂有限责任公司', description: '景泰蓝又称"铜胎掐丝珐琅"，是明代景泰年间发展起来的宫廷工艺品，以蓝釉最为出色。' },
  
  // 传统戏剧 (IV)
  { id: 25, code: 'IV-1', name: '昆曲', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '江苏省', protect_unit: '江苏省演艺集团有限公司', description: '昆曲是中国最古老的剧种之一，也是中国传统文化艺术中的珍品，被称为"百戏之祖"。' },
  { id: 26, code: 'IV-2', name: '京剧', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '北京市', protect_unit: '中国京剧院', description: '京剧是中国影响最大的戏曲剧种，分布地以北京为中心，遍及全国各地，被誉为"国粹"。' },
  { id: 27, code: 'IV-3', name: '越剧', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '浙江省', protect_unit: '浙江小百花越剧院', description: '越剧是中国第二大剧种，发源于浙江嵊州，以唱为主，声音优美动听，表演真切动人。' },
  { id: 28, code: 'IV-4', name: '黄梅戏', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '安徽省安庆市', protect_unit: '安庆市黄梅戏（地方戏曲）研究院', description: '黄梅戏原名黄梅调，是安徽省的主要地方戏曲剧种，以其清新质朴、优美流畅的风格著称。' },
  { id: 29, code: 'IV-5', name: '豫剧', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '河南省', protect_unit: '河南豫剧院', description: '豫剧是中国五大戏曲剧种之一，发源于河南开封，是中国第一大地方剧种。' },
  { id: 30, code: 'IV-9', name: '川剧', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '四川省', protect_unit: '四川省川剧院', description: '川剧是流行于四川东中部、重庆及贵州、云南部分地区的传统戏曲剧种，以变脸、吐火等特技闻名。' },
  { id: 31, code: 'IV-43', name: '皮影戏（华阴老腔）', category_id: 4, category_name: '传统戏剧', batch: '2006(第一批)', region: '陕西省华阴市', protect_unit: '华阴市文化馆', description: '华阴老腔是中国最古老的戏曲剧种之一，被誉为"中国戏曲的活化石"。' },
  
  // 传统音乐 (II)
  { id: 32, code: 'II-1', name: '侗族大歌', category_id: 2, category_name: '传统音乐', batch: '2006(第一批)', region: '贵州省黎平县', protect_unit: '黎平县侗族大歌保护中心', description: '侗族大歌是中国侗族地区一种多声部、无指挥、无伴奏、自然和声的民间合唱形式。' },
  { id: 33, code: 'II-2', name: '蒙古族长调民歌', category_id: 2, category_name: '传统音乐', batch: '2006(第一批)', region: '内蒙古自治区', protect_unit: '内蒙古自治区艺术研究院', description: '蒙古族长调民歌是蒙古族传统音乐中最具代表性的艺术形式，被誉为"草原音乐活化石"。' },
  { id: 34, code: 'II-7', name: '古琴艺术', category_id: 2, category_name: '传统音乐', batch: '2006(第一批)', region: '中国艺术研究院', protect_unit: '中国艺术研究院音乐研究所', description: '古琴是中国最古老的弹拨乐器之一，有三千年以上的历史，是中国传统文化中的重要组成部分。' },
  { id: 35, code: 'II-34', name: '南音', category_id: 2, category_name: '传统音乐', batch: '2006(第一批)', region: '福建省泉州市', protect_unit: '泉州市南音传承中心', description: '南音是福建闽南地区的传统音乐，是中国现存最古老的乐种之一，被誉为"中国音乐史上的活化石"。' },
  { id: 36, code: 'II-36', name: '西安鼓乐', category_id: 2, category_name: '传统音乐', batch: '2006(第一批)', region: '陕西省西安市', protect_unit: '西安市长安区文化馆', description: '西安鼓乐是流传于西安地区的大型民间器乐合奏形式，是中国古代音乐的重要遗存。' },
  
  // 民间文学 (I)
  { id: 37, code: 'I-1', name: '苗族古歌', category_id: 1, category_name: '民间文学', batch: '2006(第一批)', region: '贵州省台江县', protect_unit: '台江县非物质文化遗产保护中心', description: '苗族古歌是苗族民间流传的古老歌谣，内容涵盖苗族的历史、神话、宗教信仰等。' },
  { id: 38, code: 'I-6', name: '白蛇传传说', category_id: 1, category_name: '民间文学', batch: '2006(第一批)', region: '江苏省镇江市', protect_unit: '镇江市非物质文化遗产保护中心', description: '白蛇传传说是中国四大民间爱情传说之一，讲述了白素贞与许仙的爱情故事。' },
  { id: 39, code: 'I-7', name: '梁祝传说', category_id: 1, category_name: '民间文学', batch: '2006(第一批)', region: '浙江省宁波市', protect_unit: '宁波市非物质文化遗产保护中心', description: '梁祝传说是中国四大民间爱情传说之一，被誉为"东方的罗密欧与朱丽叶"。' },
  { id: 40, code: 'I-9', name: '孟姜女传说', category_id: 1, category_name: '民间文学', batch: '2006(第一批)', region: '山东省淄博市', protect_unit: '淄博市非物质文化遗产保护中心', description: '孟姜女传说是中国四大民间爱情传说之一，讲述了孟姜女哭长城的故事。' },
  
  // 曲艺 (V)
  { id: 41, code: 'V-1', name: '相声', category_id: 5, category_name: '曲艺', batch: '2006(第一批)', region: '北京市', protect_unit: '中国广播艺术团', description: '相声是一种民间说唱曲艺，以说、学、逗、唱为主要表演形式，是深受群众喜爱的艺术形式。' },
  { id: 42, code: 'V-2', name: '京韵大鼓', category_id: 5, category_name: '曲艺', batch: '2006(第一批)', region: '北京市', protect_unit: '北京市曲艺团', description: '京韵大鼓是流行于北京、天津等地的一种曲艺形式，由河北省沧州、河间一带的木板大鼓发展而来。' },
  { id: 43, code: 'V-7', name: '苏州评弹', category_id: 5, category_name: '曲艺', batch: '2006(第一批)', region: '江苏省苏州市', protect_unit: '苏州市评弹团', description: '苏州评弹是苏州评话和苏州弹词的总称，是流行于苏州、上海、浙江等地的传统曲艺形式。' },
  { id: 44, code: 'V-17', name: '山东大鼓', category_id: 5, category_name: '曲艺', batch: '2006(第一批)', region: '山东省', protect_unit: '山东省艺术研究院', description: '山东大鼓是北方大鼓中最早的一个曲种，起源于清代中期，流行于山东、河北、河南等地。' },
  
  // 传统舞蹈 (III)
  { id: 45, code: 'III-1', name: '京族独弦琴艺术', category_id: 3, category_name: '传统舞蹈', batch: '2006(第一批)', region: '广西壮族自治区东兴市', protect_unit: '东兴市文化馆', description: '京族独弦琴艺术是京族特有的传统艺术形式，以独弦琴伴奏的歌舞表演。' },
  { id: 46, code: 'III-2', name: '秧歌', category_id: 3, category_name: '传统舞蹈', batch: '2006(第一批)', region: '河北省邯郸市', protect_unit: '邯郸市群众艺术馆', description: '秧歌是中国北方广泛流传的民间舞蹈形式，具有浓郁的地方特色和民俗风情。' },
  { id: 47, code: 'III-4', name: '龙舞', category_id: 3, category_name: '传统舞蹈', batch: '2006(第一批)', region: '重庆市铜梁区', protect_unit: '铜梁区文化馆', description: '龙舞是中国传统的民间舞蹈形式，铜梁龙舞以其气势磅礴、技艺精湛而闻名。' },
  { id: 48, code: 'III-5', name: '狮舞', category_id: 3, category_name: '传统舞蹈', batch: '2006(第一批)', region: '广东省佛山市', protect_unit: '佛山市南海区文化馆', description: '狮舞是中国传统的民间舞蹈形式，广东醒狮以其威猛、灵动而著称。' },
  
  // 传统体育、游艺与杂技 (VI)
  { id: 49, code: 'VI-2', name: '太极拳', category_id: 6, category_name: '传统体育、游艺与杂技', batch: '2006(第一批)', region: '河南省焦作市', protect_unit: '焦作市文化馆', description: '太极拳是中国传统武术的重要组成部分，以柔和、缓慢、轻灵、刚柔相济为特点。' },
  { id: 50, code: 'VI-3', name: '少林功夫', category_id: 6, category_name: '传统体育、游艺与杂技', batch: '2006(第一批)', region: '河南省登封市', protect_unit: '少林寺', description: '少林功夫是中国传统武术的重要组成部分，发源于河南嵩山少林寺。' },
  { id: 51, code: 'VI-6', name: '杂技（吴桥杂技）', category_id: 6, category_name: '传统体育、游艺与杂技', batch: '2006(第一批)', region: '河北省吴桥县', protect_unit: '吴桥县杂技团', description: '吴桥杂技是中国杂技艺术的重要发源地，有"杂技之乡"的美誉。' },
  { id: 52, code: 'VI-20', name: '围棋', category_id: 6, category_name: '传统体育、游艺与杂技', batch: '2008(第二批)', region: '中国围棋协会', protect_unit: '中国围棋协会', description: '围棋是中国传统棋类智力运动，有四千多年的历史，是中华文明的瑰宝。' },
  
  // 传统医药 (IX)
  { id: 53, code: 'IX-1', name: '中医生命与疾病认知方法', category_id: 9, category_name: '传统医药', batch: '2006(第一批)', region: '中国中医科学院', protect_unit: '中国中医科学院', description: '中医生命与疾病认知方法是中医药理论体系的核心，体现了中华民族对生命和健康的认识。' },
  { id: 54, code: 'IX-2', name: '中医诊法', category_id: 9, category_name: '传统医药', batch: '2006(第一批)', region: '中国中医科学院', protect_unit: '中国中医科学院', description: '中医诊法是中医诊断疾病的方法，包括望、闻、问、切四诊合参。' },
  { id: 55, code: 'IX-3', name: '中药炮制技术', category_id: 9, category_name: '传统医药', batch: '2006(第一批)', region: '中国中药协会', protect_unit: '中国中药协会', description: '中药炮制技术是中医药传统制药技术的核心，是根据中医药理论制备中药材的方法。' },
  { id: 56, code: 'IX-4', name: '中医传统制剂方法', category_id: 9, category_name: '传统医药', batch: '2006(第一批)', region: '中国中医科学院', protect_unit: '中国中医科学院', description: '中医传统制剂方法是根据中医药理论将中药材制成各种剂型的传统技术。' },
  { id: 57, code: 'IX-5', name: '针灸', category_id: 9, category_name: '传统医药', batch: '2006(第一批)', region: '中国针灸学会', protect_unit: '中国针灸学会', description: '针灸是中医学的重要组成部分，通过针刺和艾灸等方法防治疾病。' },
  
  // 民俗 (X)
  { id: 58, code: 'X-1', name: '春节', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '文化部', protect_unit: '文化和旅游部', description: '春节是中国最隆重的传统节日，是中华民族最重要的文化符号之一。' },
  { id: 59, code: 'X-2', name: '清明节', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '文化部', protect_unit: '文化和旅游部', description: '清明节是中国传统节日，是祭祖和扫墓的日子，也是踏青郊游的好时节。' },
  { id: 60, code: 'X-3', name: '端午节', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '文化部', protect_unit: '文化和旅游部', description: '端午节是中国传统节日，有吃粽子、赛龙舟、挂艾草等习俗。' },
  { id: 61, code: 'X-4', name: '中秋节', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '文化部', protect_unit: '文化和旅游部', description: '中秋节是中国传统节日，以月之圆兆人之团圆，有赏月、吃月饼等习俗。' },
  { id: 62, code: 'X-5', name: '重阳节', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '文化部', protect_unit: '文化和旅游部', description: '重阳节是中国传统节日，有登高、赏菊、饮菊花酒等习俗，也是敬老节。' },
  { id: 63, code: 'X-71', name: '庙会（厂甸庙会）', category_id: 10, category_name: '民俗', batch: '2006(第一批)', region: '北京市西城区', protect_unit: '北京市西城区文化馆', description: '厂甸庙会是北京传统民俗活动，是北京四大庙会之一，具有浓厚的京味文化特色。' },
  { id: 64, code: 'X-84', name: '茶艺（潮州工夫茶艺）', category_id: 10, category_name: '民俗', batch: '2008(第二批)', region: '广东省潮州市', protect_unit: '潮州市文化馆', description: '潮州工夫茶艺是流行于广东潮州地区的传统饮茶习俗，是中国茶艺的活化石。' },
];

// 按分类获取项目
export function getProjectsByCategory(categoryId: number): Project[] {
  return allProjects.filter(p => p.category_id === categoryId);
}

// 搜索项目
export function searchProjects(keyword: string): Project[] {
  if (!keyword.trim()) return [];
  const lowerKeyword = keyword.toLowerCase();
  return allProjects.filter(p => 
    p.name.toLowerCase().includes(lowerKeyword) ||
    p.description.toLowerCase().includes(lowerKeyword) ||
    p.region.toLowerCase().includes(lowerKeyword) ||
    p.category_name.toLowerCase().includes(lowerKeyword)
  );
}

// 获取项目总数
export function getProjectsCount(): number {
  return allProjects.length;
}

// 获取所有分类
export const categories = [
  { id: 1, code: 'I', name: '民间文学', icon: '📖', description: '神话、传说、史诗、歌谣等口头传统' },
  { id: 2, code: 'II', name: '传统音乐', icon: '🎵', description: '民歌、器乐、传统舞蹈音乐等' },
  { id: 3, code: 'III', name: '传统舞蹈', icon: '💃', description: '民族民间舞蹈、祭祀舞蹈等' },
  { id: 4, code: 'IV', name: '传统戏剧', icon: '🎭', description: '京剧、昆曲、越剧、黄梅戏等' },
  { id: 5, code: 'V', name: '曲艺', icon: '🎤', description: '相声、评书、快板、大鼓等说唱艺术' },
  { id: 6, code: 'VI', name: '传统体育、游艺与杂技', icon: '⚽', description: '传统武术、竞技、游戏、杂技等' },
  { id: 7, code: 'VII', name: '传统美术', icon: '🎨', description: '剪纸、年画、刺绣、泥塑、雕刻等' },
  { id: 8, code: 'VIII', name: '传统技艺', icon: '🔨', description: '传统手工艺、制作技艺' },
  { id: 9, code: 'IX', name: '传统医药', icon: '💊', description: '中医药、民族医药等传统医学' },
  { id: 10, code: 'X', name: '民俗', icon: '🏮', description: '传统节日、礼仪、民间信仰等' },
];
