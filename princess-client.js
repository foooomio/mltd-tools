/**
 * @file Princess Client - HTTP Client for Princess powered by matsurihi.me
 * @copyright 2021 foooomio
 * @license MIT
 * @see https://api.matsurihi.me/docs/
 */

class VersionAPI {
  /**
   * @param {PrincessClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * 最新のアプリ・アセットバージョンの取得
   * @param {object} [options]
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/version/latest
   */
  latest({ requestInit = {} } = {}) {
    return this.client.request(`version/latest`, {}, requestInit);
  }

  /**
   * 過去のアプリバージョン情報の取得
   * @param {object} [options]
   * @param {string} [options.version] - 取得するバージョン名
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/version/apps/[version]
   */
  apps({ version = "", requestInit = {} } = {}) {
    return this.client.request(`version/apps/${version}`, {}, requestInit);
  }

  /**
   * 過去のアセットバージョン情報の取得
   * @param {object} [options]
   * @param {number | string} [options.version] - 取得するバージョン番号
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/version/assets/[version]
   */
  assets({ version = "", requestInit = {} } = {}) {
    return this.client.request(`version/assets/${version}`, {}, requestInit);
  }
}

class CardsAPI {
  /**
   * @param {PrincessClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * カード情報の取得
   * @param {object} [options]
   * @param {number | string | number[] | string[]} [options.cardId] - 取得するカードの ID
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/cards/[id]
   */
  get({ cardId = "", requestInit = {} } = {}) {
    return this.client.request(`cards/${cardId}`, {}, requestInit);
  }

  /**
   * カード情報の検索
   * @param {object} [options]
   * @param {number | string | number[] | string[]} [options.idolId] - 取得するアイドル
   * @param {string | string[]} [options.rarity] - 取得するカードのレアリティ
   * @param {string | string[]} [options.extraType] - 取得するカードの種類
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/cards/[id]
   */
  search({ idolId, rarity, extraType, requestInit = {} }) {
    return this.client.request(
      `cards`,
      { idolId, rarity, extraType },
      requestInit,
    );
  }
}

class EventsAPI {
  /**
   * @param {PrincessClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * イベント情報の取得
   * @param {object} [options]
   * @param {number | string} [options.eventId]
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]
   */
  get({ eventId = "", requestInit = {} } = {}) {
    return this.client.request(`events/${eventId}`, {}, requestInit);
  }

  /**
   * イベント情報の検索
   * @param {object} [options]
   * @param {Date | string} [options.at] - 指定した時刻に開催されている/いたイベントで絞り込み
   * @param {string | string[]} [options.type] - イベントの種類で絞り込み
   * @param {string} [options.orderBy] - 戻り値の順序
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]
   */
  search({ at, type, orderBy, requestInit = {} } = {}) {
    return this.client.request(`events`, { at, type, orderBy }, requestInit);
  }
}

class RankingsAPI {
  /**
   * @param {PrincessClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * イベントのボーダー情報の取得
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/borders
   */
  borders({ eventId, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/borders`,
      {},
      requestInit,
    );
  }

  /**
   * 現在のイベントのボーダースコアの取得
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/borderPoints
   */
  borderPoints({ eventId, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/borderPoints`,
      {},
      requestInit,
    );
  }

  /**
   * イベントランキングの集計情報の取得
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {string} options.type - 取得するランキングデータの種類
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/summaries/[type]
   */
  summaries({ eventId, type, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/summaries/${type}`,
      {},
      requestInit,
    );
  }

  /**
   * イベントランキングの集計情報の取得（アイドル別）
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {number | string} options.idolId - 取得するアイドルの ID（1–52）
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/summaries/idolPoint/[idolId]
   */
  summariesByIdol({ eventId, idolId, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/summaries/idolPoint/${idolId}`,
      {},
      requestInit,
    );
  }

  /**
   * イベントランキングのログの取得
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {string} options.type - 取得するランキングデータの種類
   * @param {number | string | number[] | string[]} options.ranks - 取得する順位
   * @param {Date | string} [options.timeMin] - 指定した日時以降のデータのみ取得（指定日時を含む）
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/logs/[type]/[ranks]
   */
  logs({ eventId, type, ranks, timeMin, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/logs/${type}/${ranks}`,
      { timeMin },
      requestInit,
    );
  }

  /**
   * イベントランキングのログの取得（アイドル別）
   * @param {object} options
   * @param {number | string} options.eventId - 取得するイベントの ID
   * @param {number | string} options.idolId - 取得するアイドルの ID（1–52）
   * @param {number | string | number[] | string[]} options.ranks - 取得する順位
   * @param {Date | string} [options.timeMin] - 指定した日時以降のデータのみ取得（指定日時を含む）
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/events/[id]/rankings/logs/idolPoint/[idolId]/[ranks]
   */
  logsByIdol({ eventId, idolId, ranks, timeMin, requestInit = {} }) {
    return this.client.request(
      `events/${eventId}/rankings/logs/idolPoint/${idolId}/${ranks}`,
      { timeMin },
      requestInit,
    );
  }
}

class LoungesAPI {
  /**
   * @param {PrincessClient} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * ラウンジ情報の取得
   * @param {object} options
   * @param {string} options.loungeId - ラウンジ ID（実 ID と表示 ID のどちらでも可）
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/lounges/[id]
   */
  get({ loungeId, requestInit = {} }) {
    return this.client.request(`lounges/${loungeId}`, {}, requestInit);
  }

  /**
   * 過去のラウンジランキング成績の取得
   * @param {object} options
   * @param {string} options.loungeId - ラウンジ ID（実 ID と表示 ID のどちらでも可）
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/lounges/[id]/eventHistory
   */
  eventHistory({ loungeId, requestInit = {} }) {
    return this.client.request(
      `lounges/${loungeId}/eventHistory`,
      {},
      requestInit,
    );
  }

  /**
   * ラウンジ検索
   * @param {object} options
   * @param {string} options.name - ラウンジ名（中間一致・ケースインセンシティブ・3 文字以上）
   * @param {boolean} [options.includeDeleted] - 削除されたラウンジを含める
   * @param {RequestInit} [options.requestInit]
   * @returns {Promise<any>}
   * @see https://api.matsurihi.me/docs/#:~:text=/lounges/[id]/search
   */
  search({ name, includeDeleted, requestInit = {} }) {
    return this.client.request(
      `lounges/search`,
      { name, includeDeleted },
      requestInit,
    );
  }
}

export class PrincessClient {
  /**
   * @param {RequestInit} [requestInit]
   */
  constructor(requestInit = {}) {
    this.requestInit = requestInit;
    this.version = new VersionAPI(this);
    this.cards = new CardsAPI(this);
    this.events = new EventsAPI(this);
    this.rankings = new RankingsAPI(this);
    this.lounges = new LoungesAPI(this);
  }

  /**
   * @param {string} path
   * @param {Record<string, any>} params
   * @param {RequestInit} requestInit
   * @returns {Promise<any>}
   */
  async request(path, params, requestInit) {
    const url = new URL(`https://api.matsurihi.me/mltd/v1/${path}`);

    for (const [key, value] of Object.entries(params)) {
      if (value == null) {
        continue;
      } else if (Array.isArray(value)) {
        url.searchParams.set(key, value.join(","));
      } else if (value instanceof Date) {
        url.searchParams.set(key, value.toISOString());
      } else {
        url.searchParams.set(key, value.toString());
      }
    }

    url.searchParams.set("prettyPrint", "false");

    const response = await fetch(url.toString(), {
      ...requestInit,
      ...this.requestInit,
    });

    if (!response.ok) {
      try {
        const { error } = await response.json();
        throw new Error(error.message);
      } catch (e) {
        throw new Error(
          `${response.status} ${response.statusText}`,
          { cause: e },
        );
      }
    }

    return response.json();
  }
}

/**
 * @param {number} from
 * @param {number} to
 * @returns {string}
 */
export function range(from, to) {
  return `${from}-${to}`;
}

export default new PrincessClient();
