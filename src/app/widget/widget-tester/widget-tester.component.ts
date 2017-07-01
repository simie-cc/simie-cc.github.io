import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-widget-tester',
    templateUrl: './widget-tester.component.html',
    styleUrls: ['./widget-tester.component.scss']
})
export class WidgetTesterComponent implements OnInit {

    value: any = null;

    constructor() { }

    ngOnInit() {
    }

}
