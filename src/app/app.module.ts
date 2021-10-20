import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ByeComponent, HelloComponent, HiComponent } from './hello.component';
import { LoginModule } from './Login/login.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { ErrorComponent } from './error.component';
import {
  customCanActivaChildteGuard,
  customCanActivateGuard,
  customCanDeActivateGuard,
} from './Guards/custom.guard';
import { CustomAppendPipe, CustomChangeCasePipe } from './Pipes/custom.pipes';
import {
  HighLighterDirective,
  isShowDirective,
  UnlessDirective,
} from './Directives/custom.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    ByeComponent,
    ErrorComponent,
    CustomAppendPipe,
    CustomChangeCasePipe,
    HighLighterDirective,
    isShowDirective,
    UnlessDirective,
  ],
  bootstrap: [AppComponent],
  providers: [
    customCanActivateGuard,
    customCanActivaChildteGuard,
    customCanDeActivateGuard,
  ],
})
export class AppModule {}
