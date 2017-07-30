
import { Component, HostBinding, trigger } from '@angular/core';
import { PersonRecord } from '../shared/person.record';
import { routeAnimation, routeAnimation_left, animations } from '../shared/route.animation';

import * as V from '@env/version';

import { StorageService } from '../storage.service';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss'],
    animations: animations()
    // host: {
    //     'class': 'host','[@switchAnimation]': 'true'},
    // animations: [routeAnimation_left('switchAnimation')]
})
export class SetupComponent {
    constructor(
        public storageService: StorageService
    ) {
        this.trigger(false);
    }

    /** 是否顥示(shown|hidden) */
    setupShown;

    /** 是否在編輯模式 */
    editing: boolean = false;

    /** 文字編輯器的值 */
    edit_value: string;

    version = V.Version + '.' + V.LastModified;

    /** 編輯參加者清單 */
    editPersons()
    {
        this.editing = true;
        this.edit_value = JSON.stringify(
            this.storageService.nameList.map((val) => val.name)
            );
    }

    editPersons_done()
    {
        let new_list = JSON.parse(this.edit_value);
        if (! (new_list && new_list instanceof Array))
        {
            alert('Not valid list!!');
            return;
        }

        let nameList = this.storageService.nameList;
        let origNames = new Set(nameList.map((val) => val.name)),
            newNames = new Set(new_list);

        var addNames = new Set(Array.from(newNames).filter(x => ! origNames.has(x))),
            removeNames = new Set(Array.from(origNames).filter(x => ! newNames.has(x)));

        console.log(`addNames: ${addNames}`);
        console.log(`removeNames: ${removeNames}`);

        if (removeNames.size > 0)
            nameList = nameList.filter(item => ! removeNames.has(item.name));
        if (addNames.size > 0)
        {
            addNames.forEach((name) => {
                nameList.push(new PersonRecord(name))
            })
        }

        this.storageService.nameList = nameList;
        this.storageService.save();
        // console.log(nameList);

        this.editing = false;
    }

    exitEditing()
    {
        this.editing = false;
    }

    cleanMatchUps() {
        this.storageService.matchUps = [];
    }

    show() {
        this.trigger(true);
    }

    hide() {
        this.trigger(false);
    }

    trigger(show?: boolean) {
        if (typeof show === 'undefined') {
            show = ! (this.setupShown === 'shown');
        }
        this.setupShown = show ? 'shown' : 'hidden';
    }
}
