import {
    Component, OnInit, Input, HostListener,
    state, trigger, transition, animate, style,
    EventEmitter, Output, forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchButtonComponent),
    multi: true
};
const noop = () => {};

@Component({
    selector: 'app-switch-button',
    templateUrl: './switch-button.component.html',
    styleUrls: ['./switch-button.component.scss'],
    animations: [
        trigger('animation', [
            state('on', style({ left: '3.3em' })),
            state('off', style({ left: '.3em' })),
            transition('* => *', animate('300ms ease-in'))
        ])
    ],
    providers: [
        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
    ]
})
export class SwitchButtonComponent implements OnInit, ControlValueAccessor {

    @Input() value: boolean = false;

    @Output() valueChanges = new EventEmitter();

    private disabled: boolean = false;
    private touchmode = false;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    get valuestring() {
        return this.value ? 'on' : 'off';
    }

    constructor() { }

    ngOnInit() {
    }

    @HostListener('touchend', ['$event'])
    touchend(event: Event) {
        this.touchmode = true;
        event.preventDefault();
        event.stopPropagation();
        this._toggleValue();
    }

    @HostListener('click', ['$event'])
    onclick(event: Event) {
        if (this.touchmode) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this._toggleValue();
    }

    _toggleValue() {
        this.value = !this.value;
        this.valueChanges.emit(this.value);
        this.onChangeCallback(this.value);
    }

    writeValue(newvalue: any): void {
        if (typeof (newvalue) !== 'boolean') {
            return;
        }

        this.value = <boolean>newvalue;
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
