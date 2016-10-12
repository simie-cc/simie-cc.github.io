import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArrayUtil, PersonRecord, MatchUp } from './shared';
import { routeAnimation as routeAnimation } from './shared/route.animation';
import { StorageService } from './storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    mode: PageMode = PageMode.SELECT;
    //mode: PageMode = PageMode.SETUP; // TODO debuging
    matchUps: Array<MatchUp> = [];

    constructor(
        private storageService: StorageService, 
        private router: Router, 
        private activatedRoute: ActivatedRoute
        ) {}

    /** 切換顥示模式 */
    doSwitchMode() {
        this.router.navigate([
            (this.router.url == '/select') ? '/result' : '/select']); 
    }

    /** 進入設定畫面 */
    previousLink: string;
    doEnterSetup($event: MouseEvent) {
        $event.stopPropagation();
        if(this.router.url == '/setup')
        {
            let preLink = this.previousLink || '/select';
            this.router.navigate([preLink]);
        }
        else
        {
            this.previousLink = this.router.url;
            this.router.navigate(['/setup']);
        }
    }

    /** 產生結果 */
    doGenerate_once() {
        let unsort_list = this.personlist(true);

        let sorted_list = this.randomizeArrayByFactor(unsort_list, 30, 10);
        this.debug_logList(sorted_list);

        let joiner_list = sorted_list.slice(0, 4);
        joiner_list.forEach((value) => value.count++);
        this.matchUps.unshift(new MatchUp(
            joiner_list.map((value) => value.name)
        ));

        this.storageService.save();
        this.mode = PageMode.RESULT;
    }

    /** 產生結果: 全部產生 */
    doGenerate_all() {

    }

    /** 重設參加次數 */
    doResetCount() {
        this.storageService.nameList.forEach(value => value.count = 0);
    }

    doGoBack() {
        this.mode = PageMode.SELECT;
    }

    /** 取得有選擇的人員清單 */
    private personlist(onOnly: boolean) {
        var personarray = [];
        if (onOnly)
            return this.storageService.nameList.filter((value) => value.join);
        else
            return this.storageService.nameList;
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
}

/** 顥示模式 */
enum PageMode {
    SELECT = 0, RESULT = 1, SETUP = 2
}

