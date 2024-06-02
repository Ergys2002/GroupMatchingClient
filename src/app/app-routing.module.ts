import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {ProfileComponent} from "./pages/profile/profile.component";



const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component:LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'profile', component: ProfileComponent},


  // {path: 'courses', component: CoursesComponent},
  // {path: 'lecturer/:id', component: LecturerComponent},
  // {path: 'lecturers', component: LecturersComponent},
  // {path: 'my-profile', component: MyProfileComponent},
  // {path: 'course/:id', component: CourseComponent},
  // {path: 'courses-schedule', component: CalendarComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
