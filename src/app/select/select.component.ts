
import { Component, HostBinding } from '@angular/core';

import { PersonRecord } from '../shared/person.record';
import { StorageService } from '../storage.service';
import { routeAnimation } from '../shared/route.animation';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'], 
  host: {'@switchAnimation': 'true'},  
    animations: [routeAnimation('switchAnimation')]
})
export class SelectComponent {
    @HostBinding('@switchAnimation')
    public animatePage = true;

    constructor(private storageService: StorageService) { }

    /** 切換 參加/不參加 */
    doItemSwitch(item: PersonRecord) {
        item.join = !item.join;
    }
}
