
import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from '../shared/route.animation';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss'],
    animations: [routeAnimation('switchAnimation')]
})
export class SetupComponent {
    @HostBinding('@switchAnimation')
    public animatePage = true;

    constructor() { }
}
