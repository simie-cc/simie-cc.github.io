
import { Injectable } from '@angular/core';

import { PersonRecord, MatchUp } from './shared';

@Injectable()
export class StorageService {

    /** 組隊清單 */
    nameList: Array<PersonRecord>;
    /** 配對結果清單 */
    matchUps: Array<MatchUp> = [];

    constructor() {
        let saved_list = localStorage[STORAGE_KEY_NAME_LIST];
        if (saved_list) {
            this.nameList = JSON.parse(saved_list);
        }
        else {
            let names = ['月月', '丹丹', 'Mandy', '大食怪', '西西', '琳琳', '麥片', '志樺', '惠玉', 'CCT', 'Wade'];
            this.nameList = names.map((name) => new PersonRecord(name));
        }

        let saved_match_list = localStorage[STORAGE_KEY_MATCH_LIST];
        if (saved_match_list)
            this.matchUps = JSON.parse(saved_match_list);
    }

    /** 將組隊清單存回 local storage */
    save() {
        localStorage[STORAGE_KEY_NAME_LIST] = JSON.stringify(this.nameList);
        localStorage[STORAGE_KEY_MATCH_LIST] = JSON.stringify(this.matchUps);
    }
}

/** 儲存在 local storage 中的鍵值名稱 */
const STORAGE_KEY_NAME_LIST = "namelist";
const STORAGE_KEY_MATCH_LIST = "matchList";
