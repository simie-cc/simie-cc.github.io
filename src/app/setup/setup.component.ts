
import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from '../shared/route.animation';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss'],
    host: {
        'class': 'host','[@switchAnimation]': 'true'},
    animations: [routeAnimation('switchAnimation')]
})
export class SetupComponent {
    constructor() { }

    editing = true;
}
