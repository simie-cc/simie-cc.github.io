
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { routeAnimation } from '../shared/route.animation';
import { StorageService } from '../storage.service';
import { MatchUp } from '../shared';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    host: {
        'class': 'host','[@switchAnimation]': 'true',
        '(document:mouseup)': 'onMouseup()',
        '(document:mousemove)': 'onMousemove($event)'
    },
    animations: [routeAnimation('switchAnimation')]
})
export class ResultComponent {
    @HostBinding('@switchAnimation')
    public animatePage = true;

    constructor(
        private storage: StorageService,
        private router: Router) { }

    /** 移除指定的場次 */
    removeMe(selectedMatch: MatchUp) {
        let itemIndex = this.storage.matchUps.indexOf(selectedMatch);
        if (itemIndex == -1)
        {
            alert("Cannot find the item: " + JSON.stringify(selectedMatch));
            return;
        }
        else
            console.log(`Delete match ${JSON.stringify(selectedMatch)}`);

        let nameList = this.storage.nameList;
        this.storage.matchUps.splice(itemIndex, 1);
        selectedMatch.joiners.forEach((value) => {
            let matchItem = nameList.find((nameItem) => nameItem.name == value);
            if (matchItem)
                matchItem.count = Math.max(0, matchItem.count - 1);
        });

        this.storage.save();
        this.router.navigate(['/select']);
    }

    /** 記錄被選擇到的刪除項目 */
    startpos: {x: number, y: number, targetElm: HTMLElement, targetItem: MatchUp};

    onMousedown($event: MouseEvent, item: MatchUp) {
        $event.preventDefault();

        this.startpos = {x: $event.screenX, y: $event.screenY,
            targetElm: <HTMLElement> $event.currentTarget,
            targetItem: item};
    }

    onMousemove($event) {
        if (! this.startpos)
            return;

        let targetElm = this.startpos.targetElm;
        let xshift = $event.screenX - this.startpos.x;
        targetElm.style.transform = `translateX(${xshift}px)`;

        this.startpos.targetItem.readyToDelete = (xshift >= targetElm.clientWidth * 0.3);
    }

    onMouseup() {
        if (! this.startpos)
            return;

        //console.log('onmouseup');

        this.startpos.targetElm.style.transform = '';
        if (this.startpos.targetItem.readyToDelete)
            this.removeMe(this.startpos.targetItem);

        this.startpos = null;
    }
}
