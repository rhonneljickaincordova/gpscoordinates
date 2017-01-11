import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from "@angular/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {COMPILER_PROVIDERS} from "@angular/compiler";
import {ConnectivityService} from "../providers/connectivity-service";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler

    },COMPILER_PROVIDERS,ConnectivityService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
