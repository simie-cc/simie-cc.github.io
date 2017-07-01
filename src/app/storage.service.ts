
import { Injectable } from '@angular/core';

import { PersonRecord, MatchUp } from './shared';

@Injectable()
export class StorageService {

    /** 組隊清單 */
    nameList: Array<PersonRecord>;
    /** 配對結果清單 */
    matchUps: Array<MatchUp> = [];
    /** 只保留最新結果 */
    remainLatest: boolean = true;

    constructor() {
        let storaged_prefs = JSON.parse(localStorage[STORAGE_KEY_PREFS] || "{}");

        let saved_list = storaged_prefs["nameList"];
        if (saved_list) {
            this.nameList = saved_list;
        } else {
            let names = ['月月', '丹丹', 'Mandy', '大食怪', '西西', '琳琳', '麥片', '志樺', '惠玉', 'CCT', 'Za'];
            this.nameList = names.map((name) => new PersonRecord(name));
        }

        let saved_match_list = storaged_prefs["matchUps"];
        if (saved_match_list)
            this.matchUps = saved_match_list;
    }

    /** 將組隊清單存回 local storage */
    save() {
        localStorage[STORAGE_KEY_PREFS] = JSON.stringify(this);
    }
}

/** 儲存在 local storage 中的鍵值名稱 */
const STORAGE_KEY_NAME_LIST = "mtp.namelist";
const STORAGE_KEY_MATCH_LIST = "mtp.matchList";
const STORAGE_KEY_PREFS = "mtp.prefs";
