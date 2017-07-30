
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { SetupComponent } from './setup/setup.component';
import { WidgetTesterComponent } from './widget/widget-tester/widget-tester.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'select' },
    { path: 'select', component: SelectComponent },
    { path: 'result', component: ResultComponent, data: { label: '結果' } },
    // { path: 'setup', component: SetupComponent },
    { path: 'widget', component: WidgetTesterComponent }
];

