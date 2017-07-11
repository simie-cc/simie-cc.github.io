
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { PersonRecord, MatchUp } from '../shared';
import { StorageService } from '../storage.service';
import { no_animation } from '../shared/route.animation';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
        host: {
        'class': 'host base','[@switchAnimation]': 'true'},
    animations: [no_animation('switchAnimation')]
})
export class SelectComponent {
    constructor(
        private storage: StorageService,
        private router: Router
        ) { }

    get nameList() { return this.storage.nameList; }

    /** 切換 參加/不參加 */
    doItemSwitch(event: MouseEvent, item: PersonRecord) {
        event.preventDefault();
        event.stopPropagation();

        item.join = !item.join;
    }

    /** 產生結果 */
    doGenerate_once() {
        let unsort_list = this.personlist(true);

        let sorted_list = this.randomizeArrayByFactor(unsort_list, 30, 10);
        //this.debug_logList(sorted_list);

        let joiner_list = sorted_list.length >= 4 ? sorted_list.slice(0, 4) : sorted_list;
        let starter = Math.floor(Math.random() * joiner_list.length) + 1;
        joiner_list.forEach((value) => value.count++);
        let matchup = new MatchUp(
            joiner_list.map((value) => value.name), starter, true
        );

        this.checkRemain();
        this.storage.matchUps.unshift(matchup);
        console.log(matchup);

        this.storage.save();
        this.router.navigate(['/result']);
    }

    /** 產生結果: 全部產生 */
    doGenerate_all() {
        let unsort_list = this.personlist(true);

        let sorted_list = this.randomizeArrayByFactor(unsort_list, 30, 10);
        //this.debug_logList(sorted_list);

        let first = true;
        let results = new Array<MatchUp>();
        while (sorted_list.length > 0)
        {
            let joiner_list = sorted_list.length >= 4 ? sorted_list.slice(0, 4) : sorted_list;
            sorted_list = sorted_list.slice(4);

            let starter = Math.floor(Math.random() * joiner_list.length) + 1;
            joiner_list.forEach((value) => value.count++);
            results.push(new MatchUp(
                joiner_list.map((value) => value.name), starter, first
            ));
            first = false;
        }

        this.checkRemain();
        results.reverse().forEach((value) => this.storage.matchUps.unshift(value));
        this.storage.save();
        this.router.navigate(['/result']);
    }

    private checkRemain() {
        if (this.storage.remainLatest) {
            this.storage.matchUps = [];
        }
    }

    /** 重設參加次數 */
    doResetCount() {
        this.storage.nameList.forEach(value => value.count = 0);
    }

    /** 取得有選擇的人員清單 */
    private personlist(onOnly: boolean) {
        var personarray = [];
        if (onOnly)
            return this.storage.nameList.filter((value) => value.join);
        else
            return this.storage.nameList;
    }

    /** 將 PersonRecord 轉換為 name 的 Array，並用 console.log 輸出 */
    private debug_logList(list: Array<PersonRecord>) {
        console.log(
            list.map((value) => value.name)
        );
    }

    /** randomize the array */
    private randomizeArray(arr_src: Array<PersonRecord>): Array<PersonRecord> {
        const max_random = arr_src.length * 1000;
        var randomMap = {};
        for (let item of arr_src) {
            let index = 0;
            while (true) {
                index = Math.floor(Math.random() * max_random);
                if (!randomMap[index])
                    break;
            }

            randomMap[index] = item;
        }

        return Object.keys(randomMap).map((value) => randomMap[value]);
    }

    /** randomize the array / factoring mode */
    private randomizeArrayByFactor(arr_src: Array<PersonRecord>, countFactor: number, baseFactor: number): Array<PersonRecord> {
        //let max_count = Math.max.apply(null, arr_src.map((value) => value.count));
        //const max_random = arr_src.length * 1000;
        //var randomMap = {};
        var randomList: Array<{ person: PersonRecord, weight: number }> = [];
        for (let item of arr_src) {
            let maxFactor = item.count * countFactor + baseFactor;
            let randomWeight: number = Math.floor(Math.random() * maxFactor);

            randomList.push({ person: item, weight: randomWeight });
        }

        console.log(randomList.map((value) => `${value.person.name}(${value.weight})`));

        return randomList
            .sort((a, b) => a.weight - b.weight)
            .map((value) => value.person);
    }

    goResultPage() {
        this.router.navigate(['/result']);
    }
}
