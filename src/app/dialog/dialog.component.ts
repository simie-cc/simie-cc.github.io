import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    host: {
        'class': 'app-dialog'
    }
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
