import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArrayUtil, PersonRecord, MatchUp } from './shared';
import { routeAnimation as routeAnimation } from './shared/route.animation';
import { StorageService } from './storage.service';
import { DisplayNames } from './app.route';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    version = '0.18-20161103';

    constructor(
        private storage: StorageService,
        private router: Router
        ) {}

    /** 取得標題顯示名稱 */
    get urlname() {
        let url = this.router.url;
        if (DisplayNames.get(url))
            return '- ' + DisplayNames.get(url);
        else
            return url;
    }

    /** 前一個顯示畫面 */
    private previousLink: string;

    /** 切換顥示模式 */
    doSwitchMode($event: MouseEvent) {
        $event.preventDefault();

        if(this.router.url == '/setup')
        {
            let preLink = this.previousLink || '/select';
            this.router.navigate([preLink]);
        }
        else
        {
            this.router.navigate([
                (this.router.url == '/select') ? '/result' : '/select']);
        }
    }

    /** 進入設定畫面 */
    doEnterSetup($event: MouseEvent) {
        $event.stopPropagation();
        if(this.router.url == '/setup')
        {
            let preLink = this.previousLink || '/select';
            this.router.navigate([preLink]);
        }
        else
        {
            this.previousLink = this.router.url;
            this.router.navigate(['/setup']);
        }
    }
}
