
import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from '../shared/route.animation';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    host: {'@switchAnimation': 'true'},  
    animations: [routeAnimation('switchAnimation')]
})
export class ResultComponent {
    @HostBinding('@switchAnimation')
    public animatePage = true;

    constructor() { }

}
