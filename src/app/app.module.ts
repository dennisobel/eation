import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SplashPage } from '../pages/splash/splash';
import { MenuPage } from '../pages/menu/menu';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { OtpPage } from '../pages/otp/otp';
import { RatePage } from '../pages/rate/rate';
import { RoomsPage } from '../pages/rooms/rooms';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    MenuPage,
    OnboardingPage,
    OtpPage,
    RatePage,
    RoomsPage,
    SearchPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    MenuPage,
    OnboardingPage,
    OtpPage,
    RatePage,
    RoomsPage,
    SearchPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
