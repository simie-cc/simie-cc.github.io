import { Component, 
      Input,
      trigger,
      state,
      style,
      transition,
      animate } from '@angular/core';
import { ArrayUtil } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
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
    nameList: Array<NameItem> = []

    constructor() {
        let names = ['月月','丹丹','Mandy','大食怪','西西','琳琳','麥片','志樺','CCT','Wade','貝貝','唯佑'];
        for (let n of names)
            this.nameList.push(new NameItem(n));

        localStorage.setItem("abc", "def");
    }

    /** 切換顥示模式 */
    doSwitchMode() {
        this.mode = (this.mode + 1) % 2;
    }

    /** 切換 參加/不參加 */
    doItemSwitch(item: NameItem) {
        item.on = ! item.on;
    }

    /** 產生結果 */
    doGenerate() {
        let old_list = this.personlist(true);
        this.debug_logList(old_list);
        this.debug_logList(
            this.randomizeArray(old_list));
    }

    /** 取得有選擇的人員清單 */
    private personlist(onOnly: boolean) {
        var personarray = [];
        if (onOnly)
            return this.nameList.filter((value) => value.on);
        else
            return this.nameList;
    }

    /** 將 NameItem 轉換為 name 的 Array，並用 console.log 輸出 */
    private debug_logList(list: Array<NameItem>)
    {
        console.log(
            list.map((value) => value.name)
        );
    }

    /** randomize the array */
    private randomizeArray(arr_src: Array<NameItem>)
    {
        var arr = arr_src.slice(0);
        for (var i = 0; i < 10; ++ i)
        {
            var index1 = Math.floor(Math.random() * arr.length * 1000) % arr.length, 
                index2 = Math.floor(Math.random() * arr.length * 1000) % arr.length;
            if (index1 == index2) continue;
            
            var item = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = item;
        }
        return arr;
    }
}

/** 顥示模式 */
enum PageMode {
    SELECT = 0, RESULT = 1
}

/** 人員結構 */
class NameItem
{
    name: string;
    on: boolean;
    count: number;

    constructor(name: string)
    {
        this.name = name;
        this.on = true;
        this.count = 0;
    }
}
