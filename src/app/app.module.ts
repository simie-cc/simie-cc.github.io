import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StorageService } from './storage.service';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { SetupComponent } from './setup/setup.component';
import { AppRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ResultComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutes
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
