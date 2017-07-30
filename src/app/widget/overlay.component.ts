import { Component, OnInit, HostBinding, animate, trigger, transition, state, style, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
    selector: 'app-overlay',
    template: '',
    styles: [`
:host {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    background-color: #888888;
    opacity: 0.7;
}
`],
    animations: [
        trigger('overlayAnimation', [
            state('void', style({ opacity: '0' })),
            state('show', style({ opacity: '0.7' })),
            transition('void => *, * => void', animate('1000ms ease-in-out'))
        ])
    ]
})
export class OverlayComponent implements OnInit {
    @HostBinding('@overlayAnimation')
    animate = 'true';

    @Output()
    overlayClicked = new EventEmitter();

    @HostListener('click', ['$event'])
    clicked(event: Event) {
        this.overlayClicked.emit();
    }

    constructor() { }

    ngOnInit() {
    }

}
