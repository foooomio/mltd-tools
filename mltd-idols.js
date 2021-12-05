/**
 * @file MLTD Idols - Utility for MLTD's idols
 * @copyright 2021 foooomio
 * @license MIT
 */

/**
 * @typedef {object} Idol
 * @property {number} id
 * @property {string} name
 * @property {"Princess" | "Fairy" | "Angel"} type
 */

/**
 * @type {Idol[]}
 */
const idols = [
  { id: 1, name: "天海春香", type: "Princess" },
  { id: 2, name: "如月千早", type: "Fairy" },
  { id: 3, name: "星井美希", type: "Angel" },
  { id: 4, name: "萩原雪歩", type: "Princess" },
  { id: 5, name: "高槻やよい", type: "Angel" },
  { id: 6, name: "菊地真", type: "Princess" },
  { id: 7, name: "水瀬伊織", type: "Fairy" },
  { id: 8, name: "四条貴音", type: "Fairy" },
  { id: 9, name: "秋月律子", type: "Fairy" },
  { id: 10, name: "三浦あずさ", type: "Angel" },
  { id: 11, name: "双海亜美", type: "Angel" },
  { id: 12, name: "双海真美", type: "Angel" },
  { id: 13, name: "我那覇響", type: "Princess" },
  { id: 14, name: "春日未来", type: "Princess" },
  { id: 15, name: "最上静香", type: "Fairy" },
  { id: 16, name: "伊吹翼", type: "Angel" },
  { id: 17, name: "田中琴葉", type: "Princess" },
  { id: 18, name: "島原エレナ", type: "Angel" },
  { id: 19, name: "佐竹美奈子", type: "Princess" },
  { id: 20, name: "所恵美", type: "Fairy" },
  { id: 21, name: "徳川まつり", type: "Princess" },
  { id: 22, name: "箱崎星梨花", type: "Angel" },
  { id: 23, name: "野々原茜", type: "Angel" },
  { id: 24, name: "望月杏奈", type: "Angel" },
  { id: 25, name: "ロコ", type: "Fairy" },
  { id: 26, name: "七尾百合子", type: "Princess" },
  { id: 27, name: "高山紗代子", type: "Princess" },
  { id: 28, name: "松田亜利沙", type: "Princess" },
  { id: 29, name: "高坂海美", type: "Princess" },
  { id: 30, name: "中谷育", type: "Princess" },
  { id: 31, name: "天空橋朋花", type: "Fairy" },
  { id: 32, name: "エミリー", type: "Princess" },
  { id: 33, name: "北沢志保", type: "Fairy" },
  { id: 34, name: "舞浜歩", type: "Fairy" },
  { id: 35, name: "木下ひなた", type: "Angel" },
  { id: 36, name: "矢吹可奈", type: "Princess" },
  { id: 37, name: "横山奈緒", type: "Princess" },
  { id: 38, name: "二階堂千鶴", type: "Fairy" },
  { id: 39, name: "馬場このみ", type: "Angel" },
  { id: 40, name: "大神環", type: "Angel" },
  { id: 41, name: "豊川風花", type: "Angel" },
  { id: 42, name: "宮尾美也", type: "Angel" },
  { id: 43, name: "福田のり子", type: "Princess" },
  { id: 44, name: "真壁瑞希", type: "Fairy" },
  { id: 45, name: "篠宮可憐", type: "Angel" },
  { id: 46, name: "百瀬莉緒", type: "Fairy" },
  { id: 47, name: "永吉昴", type: "Fairy" },
  { id: 48, name: "北上麗花", type: "Angel" },
  { id: 49, name: "周防桃子", type: "Fairy" },
  { id: 50, name: "ジュリア", type: "Fairy" },
  { id: 51, name: "白石紬", type: "Fairy" },
  { id: 52, name: "桜守歌織", type: "Angel" },
];

/**
 * @returns {Idol[]}
 */
export const getAllIdols = () => idols;

/**
 * @param {number} id
 * @returns {Idol | undefined}
 */
export const getIdolById = (id) => idols[id - 1];

/**
 * @param {string} name
 * @returns {Idol | undefined}
 */
export const getIdolByName = (name) => idols.find((idol) => idol.name === name);

/**
 * @param {"Princess" | "Fairy" | "Angel"} type
 * @returns {Idol[]}
 */
export const getIdolsByType = (type) =>
  idols.filter((idol) => idol.type === type);

export default {
  getAllIdols,
  getIdolById,
  getIdolByName,
  getIdolsByType,
};
