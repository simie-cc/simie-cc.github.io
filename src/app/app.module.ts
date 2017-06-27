import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, animate } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './storage.service';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { SetupComponent } from './setup/setup.component';
import { AppRoutes } from './app.route';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ResultComponent,
    SetupComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    HttpModule, 
    AppRoutes
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
