import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './modules/home/admins/admin-home/admin-home.component';
import {LoginComponent} from './modules/home/login/login.component';

import {CalendarComponent} from './modules/home/users/calendar/calendar.component';
import {Error403Component} from './shared/component/error/error403/error403.component';
import {Error404Component} from './shared/component/error/error404/error404.component';
import {AdminGuardService} from './core/guards/admin-guard.service';
import {HomeGuardService} from './core/guards/home-guard.service';
import {UserGuardService} from './core/guards/user-guard.service';
// import { AdminAuthGuard } from './core/guards/auth-guard.service';
import {DetailstalkComponent} from './modules/home/sprekers/detailstalk/detailstalk.component';
import {TalkoverzichtComponent} from './modules/home/sprekers/talkoverzicht/talkoverzicht.component';
import {ChatComponent} from './modules/home/users/chat/chat.component';
import {PollComponent} from './modules/home/users/poll/poll.component';
import {HomeComponent} from './modules/home/users/home/home.component';
import {TalksComponent} from './modules/home/users/talks/talks.component';
import {UsersAccountsComponent} from './modules/home/admins/users-accounts/users-accounts.component';
import {NewUserComponent} from './modules/home/admins/new-user/new-user.component';
import {AllroomsComponent} from './modules/home/admins/allrooms/allrooms.component';
import {SprekerGuardService} from './core/guards/spreker-guard.service';
import {NewpollComponent} from './modules/home/sprekers/newpoll/newpoll.component';
import {SprekersHomeComponent} from './modules/home/sprekers/sprekers-home/sprekers-home.component';

const routes: Routes = [
  // { path: '', component:  },
  {path: 'login', component: LoginComponent},
  {path: 'calendar', component: CalendarComponent, canActivate: [UserGuardService]},
  {path: 'no-access', component: Error403Component},
  {path: '', component: LoginComponent, canActivate: [HomeGuardService]},

  {path: 'admin/home', component: AdminHomeComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'admin/users-account', component: UsersAccountsComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'admin/new-user', component: NewUserComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'spreker/newpoll', component: UsersAccountsComponent, canActivate: [SprekerGuardService, AdminGuardService]},

  {path: 'alltalks', component: TalksComponent, canActivate: [UserGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [UserGuardService]},
  {path: 'poll/:id', component: PollComponent, canActivate: [UserGuardService]},
  {path: 'chat', component: ChatComponent, canActivate: [UserGuardService]},
  {path: 'mijntalks', component: TalkoverzichtComponent, canActivate: [UserGuardService]},
  {path: 'detailstalk', component: DetailstalkComponent, canActivate: [UserGuardService]},
  {path: 'admin/allrooms', component: AllroomsComponent, canActivate: [UserGuardService]},

  {path: 'login', component: LoginComponent},
  {path: 'calendar', component: CalendarComponent, canActivate: [UserGuardService]},
  {path: 'no-access', component: Error403Component},
  {path: '', component: LoginComponent, canActivate: [HomeGuardService]},

  {path: 'newpoll', component: NewpollComponent, canActivate: [UserGuardService]},
  {path: 'admin/home', component: AdminHomeComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'admin/users-account', component: UsersAccountsComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'admin/new-user', component: NewUserComponent, canActivate: [UserGuardService, AdminGuardService]},
  {path: 'alltalks', component: TalksComponent, canActivate: [UserGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [UserGuardService]},
  {path: 'poll', component: PollComponent, canActivate: [UserGuardService]},
  {path: 'chat', component: ChatComponent, canActivate: [UserGuardService]},
  {path: 'spreker/mijntalks', component: TalkoverzichtComponent, canActivate: [SprekerGuardService]},
  {path: 'spreker/detailstalk', component: DetailstalkComponent, canActivate: [SprekerGuardService]},
  {path: 'admin/allrooms', component: AllroomsComponent, canActivate: [AdminGuardService]},
  {path: 'spreker/home', component: SprekersHomeComponent, canActivate: [UserGuardService]},

  //moet laatst blijven staan.
  {path: '**', component: Error404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
