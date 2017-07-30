import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, animate } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './storage.service';
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { SetupComponent } from './setup/setup.component';
import { DialogComponent } from './dialog/dialog.component';
import { SwitchButtonComponent } from './widget/switch-button/switch-button.component';
import { WidgetTesterComponent } from './widget/widget-tester/widget-tester.component';
import { OverlayComponent } from './widget/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ResultComponent,
    SetupComponent,
    DialogComponent,
    SwitchButtonComponent,
    WidgetTesterComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
