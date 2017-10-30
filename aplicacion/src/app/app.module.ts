import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { VerNotificationPage } from '../pages/notification/verNotification';

import { UserService } from '../services/mocks/user.service';
import { RequestService } from '../services/request.service';
//refactor por router

var links = [
  { component : LoginPage, name : "Login" , segment : "login"},
  { component : TabsPage, name : "tabs" , segment : "tabs"},
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotificationPage,
    TabsPage,
    ProfilePage,
    LoginPage,
    VerNotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {} , {links:links}),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotificationPage,
    TabsPage,
    ProfilePage,
    LoginPage,
    VerNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    RequestService
  ]
})
export class AppModule {}
