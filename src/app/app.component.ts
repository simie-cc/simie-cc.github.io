import { SetupComponent } from './setup/setup.component';
import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    ElementRef,
    ViewChild
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';

import { ArrayUtil, PersonRecord, MatchUp } from './shared';
import { routeAnimation as routeAnimation, animations } from './shared/route.animation';
import { StorageService } from './storage.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('heading', [
            state('heading', style({ 'font-size': '1.3rem', 'padding-top': '1.35rem' })),
            state('subline', style({ 'font-size': '0.6em', 'padding-top': '0.3rem' })),
            transition('* => *', animate('300ms ease-in'))
        ]),
        ...animations()
    ]
})
export class AppComponent {

    @ViewChild(SetupComponent)
    setupComponent: SetupComponent;

    private urlname = "";

    get setupPanelState() { return this.setupComponent.setupShown; }

    constructor(
        private storage: StorageService,
        private router: Router,
        private route: ActivatedRoute,
        private elm: ElementRef
    ) {
        this.router.events
            .filter(e => e instanceof RoutesRecognized)
            .do(e => console.log('navigate to', (<RoutesRecognized> e).url))
            .filter(e => (<RoutesRecognized> e).url !== '/select')
            .map(() => this.route)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .subscribe(route => {
                let fullurl = '/' + route.snapshot.url.join('/');
                if (fullurl === '/') {
                    fullurl = '/select';
                }
                this.paths.push(fullurl);
            })

        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .map(() => this.route)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe(e => this.urlname = e.label);
    }

    get url() {
        return this.router.url;
    }

    get urlname_state() {
        return this.urlname ? "subline" : "heading";
    }

    get urlicon() {
        if (this.paths.length === 0) {
            return "fa-bars";
        } else {
            return "fa-arrow-left";
        }
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

    private paths = [];

    /** 進入設定畫面 */
    doEnterSetup(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (this.paths.length === 0) {
            this.setupComponent.trigger(true);
        } else {
            let latestPath = this.paths.pop();
            this.router.navigate([latestPath]);
        }
        // if (this.router.url === '/select') {
        //     this.router.navigate(['/setup']);
        // } else {
        //     this.router.navigate(['/select']);
        // }
    }

    doLeaveSetup() {
        this.setupComponent.trigger(false);
    }

    // enterResult(event: MouseEvent) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     this.paths.push(this.router.url);
    //     console.log('paths', this.paths);
    //     this.router.navigate(['/result']);
    // }
}
