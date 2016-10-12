
import { Injectable } from '@angular/core';

import { PersonRecord } from './shared/person.record';

@Injectable()
export class StorageService {

    /** 組隊清單 */
    nameList: Array<PersonRecord>;

    constructor() {
        let saved_list = localStorage[STORAGE_KEY_NAME_LIST];
        if (saved_list) {
            this.nameList = JSON.parse(saved_list);
        }
        else {
            let names = ['月月', '丹丹', 'Mandy', '大食怪', '西西', '琳琳', '麥片', '志樺', 'CCT', 'Wade', '貝貝', '唯佑'];
            this.nameList = names.map((name) => new PersonRecord(name));
        }
    }

    /** 將組隊清單存回 local storage */ 
    save() {
        localStorage[STORAGE_KEY_NAME_LIST] = JSON.stringify(this.nameList);
    }
}

/** 儲存在 local storage 中的鍵值名稱 */
const STORAGE_KEY_NAME_LIST: string = "namelist";
