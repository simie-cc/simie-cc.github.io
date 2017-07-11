import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    ElementRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArrayUtil, PersonRecord, MatchUp } from './shared';
import { routeAnimation as routeAnimation } from './shared/route.animation';
import { StorageService } from './storage.service';
import { DisplayNames } from './app.route';
import * as V from '../environments/version';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('heading', [
            state('heading', style({ 'font-size': '1.3rem', 'padding-top': '1.35rem' })),
            state('subline', style({ 'font-size': '0.6em', 'padding-top': '0.3rem' })),
            transition('* => *', animate('300ms ease-in'))
        ])
    ]
})
export class AppComponent {
    version = V.Version + '.' + V.LastModified;

    constructor(
        private storage: StorageService,
        private router: Router,
        private elm: ElementRef
    ) { }

    get url() {
        return this.router.url;
    }

    /** 取得標題顯示名稱 */
    get urlname() {
        let url = this.router.url;
        if (DisplayNames.get(url))
            return DisplayNames.get(url);
        else
            return "";
    }

    get urlname_state() {
        return this.urlname ? "subline" : "heading";
    }

    // /** 切換顥示模式 */
    // doSwitchMode($event: MouseEvent) {
    //     $event.preventDefault();

    //     if (this.router.url == '/setup') {
    //         let preLink = this.previousLink || '/select';
    //         this.router.navigate([preLink]);
    //     }
    //     else {
    //         this.router.navigate([
    //             (this.router.url == '/select') ? '/result' : '/select']);
    //     }
    // }

    /** 進入設定畫面 */
    doEnterSetup(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (this.router.url === '/select') {
            this.router.navigate(['/setup']);
        } else {
            this.router.navigate(['/select']);
        }
    }

    enterResult(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        console.log('show!');
        this.router.navigate(['/result']);
    }
}
