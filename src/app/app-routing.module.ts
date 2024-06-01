import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  // {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  // {path: 'home-page', component:HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'sign-up', component: SignUpComponent},
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
