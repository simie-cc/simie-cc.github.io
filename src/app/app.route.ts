
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { SetupComponent } from './setup/setup.component';

export const ComponentRoutes: Routes = [
    { path: '', redirectTo: 'select', pathMatch: 'full' },
    { path: 'select', component: SelectComponent },
    { path: 'result', component: ResultComponent },
    { path: 'setup', component: SetupComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(ComponentRoutes);

export const DisplayNames: Map<string,string> = loadNameMapping();

function loadNameMapping(): Map<string,string>
{
    let map = new Map<string,string>();
    map.set('/select', '選擇');
    map.set('/result', '結果');
    map.set('/setup', '設定');
    return map;
}
