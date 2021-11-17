import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './shared/component/templates/footer/footer.component';
import {NavigationbarComponent} from './shared/component/templates/navigationbar/navigationbar.component';
import {Error403Component} from './shared/component/error/error403/error403.component';
import {Error404Component} from './shared/component/error/error404/error404.component';
import {LoginComponent} from './modules/home/login/login.component';
import {AppRoutingModule} from './app-routing.module';

import {CalendarComponent} from './modules/home/users/calendar/calendar.component';
import {FormsModule} from '@angular/forms';

import {AdminHomeComponent} from './modules/home/admins/admin-home/admin-home.component';
import {TalksComponent} from './modules/home/users/talks/talks.component';
import {HomeComponent} from './modules/home/users/home/home.component';
import {PollComponent} from './modules/home/users/poll/poll.component';
import {ChatComponent} from './modules/home/users/chat/chat.component';
import {TalkoverzichtComponent} from './modules/home/sprekers/talkoverzicht/talkoverzicht.component';
import {DetailstalkComponent} from './modules/home/sprekers/detailstalk/detailstalk.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersAccountsComponent} from './modules/home/admins/users-accounts/users-accounts.component';

import {NewUserComponent} from './modules/home/admins/new-user/new-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewpollComponent} from './modules/home/sprekers/newpoll/newpoll.component';
import {AllroomsComponent} from './modules/home/admins/allrooms/allrooms.component';
import {SprekersHomeComponent} from './modules/home/sprekers/sprekers-home/sprekers-home.component';
import {SprekersComponent} from './modules/home/sprekers/sprekers.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    Error403Component,
    Error404Component,
    LoginComponent,
    CalendarComponent,
    AdminHomeComponent,
    TalksComponent,
    HomeComponent,
    PollComponent,
    ChatComponent,
    TalkoverzichtComponent,
    DetailstalkComponent,
    UsersAccountsComponent,
    NewUserComponent,
    NewpollComponent,
    AllroomsComponent,
    SprekersHomeComponent,
    SprekersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
