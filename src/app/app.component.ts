import { Component, 
      Input,
      trigger,
      state,
      style,
      transition,
      animate } from '@angular/core';
import { ArrayUtil } from './shared';
import { PersonRecord } from './shared/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0) scale(1)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%) scale(1)'}), 
                animate('100ms')
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(0) scale(0)'}))
            ])
      ])
]
})
export class AppComponent {
    mode: PageMode = PageMode.SELECT;
    //mode: PageMode = PageMode.SETUP; // TODO debuging
    nameList: Array<PersonRecord>;
    matchUp: Array<String>;

    constructor() {
        let saved_list = localStorage[STORAGE_KEY];
        if (saved_list)
        {
            this.nameList = JSON.parse(saved_list);
        }
        else
        {
            let names = ['月月','丹丹','Mandy','大食怪','西西','琳琳','麥片','志樺','CCT','Wade','貝貝','唯佑'];
            this.nameList = names.map((name) => new PersonRecord(name));
            // for (let n of names)
            //     this.nameList.push(new PersonRecord(n));
        }
    }

    /** 切換顥示模式 */
    doSwitchMode() {
        this.mode = (this.mode + 1) % 2;
    }

    /** 切換 參加/不參加 */
    doItemSwitch(item: PersonRecord) {
        item.join = ! item.join;
    }

    /** 產生結果 */
    doGenerate_once() {
        let unsort_list = this.personlist(true);
        unsort_list.forEach((value) => value.count ++);

        let sorted_list = this.randomizeArrayByFactor(unsort_list, 30, 10);
        this.debug_logList(sorted_list);
        this.matchUp = sorted_list.slice(0, 4).map((value) => value.name);

        localStorage[STORAGE_KEY] = JSON.stringify(this.nameList);

        this.mode = PageMode.RESULT;
    }

    /** 重設參加次數 */
    doResetCount()
    {
        this.nameList.forEach(value => value.count = 0);
    }

    doGoBack() {
        this.mode = PageMode.SELECT;
    }

    /** 取得有選擇的人員清單 */
    private personlist(onOnly: boolean) {
        var personarray = [];
        if (onOnly)
            return this.nameList.filter((value) => value.join);
        else
            return this.nameList;
    }

    /** 將 PersonRecord 轉換為 name 的 Array，並用 console.log 輸出 */
    private debug_logList(list: Array<PersonRecord>)
    {
        console.log(
            list.map((value) => value.name)
        );
    }

    /** randomize the array */
    private randomizeArray(arr_src: Array<PersonRecord>): Array<PersonRecord>
    {
        const max_random = arr_src.length * 1000;
        var randomMap = {};
        for (let item of arr_src)
        {
            let index = 0;
            while (true) {
                index = Math.floor(Math.random() * max_random);
                if (! randomMap[index])
                    break;
            }

            randomMap[index] = item;
        }

        return Object.keys(randomMap).map((value) => randomMap[value]);
    }

    /** randomize the array / factoring mode */
    private randomizeArrayByFactor(arr_src: Array<PersonRecord>, countFactor: number, baseFactor: number): Array<PersonRecord>
    {
        //let max_count = Math.max.apply(null, arr_src.map((value) => value.count));
        //const max_random = arr_src.length * 1000;
        var randomMap = {};
        for (let item of arr_src)
        {
            let maxFactor = item.count * countFactor + baseFactor;
            while (true) {
                let index = Math.floor(Math.random() * maxFactor);
                if (! randomMap[index])
                {    
                    randomMap[index] = item;
                    break;
                }
            }
        }

        return Object.keys(randomMap).map((value) => randomMap[value]);
    }
}

/** 儲存在 local storage 中的鍵值名稱 */
const STORAGE_KEY: string = "list";

/** 顥示模式 */
enum PageMode {
    SELECT = 0, RESULT = 1, SETUP = 2
}
