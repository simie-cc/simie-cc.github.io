
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
        'class': 'host','[@switchAnimation]': 'true'},
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
}
