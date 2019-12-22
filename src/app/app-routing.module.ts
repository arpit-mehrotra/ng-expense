import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { CreateuserComponent } from './user/createuser.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'user', loadChildren:'./user/user.module#UserModule'},
  // {path: 'createuser', loadChildren:'./user/user.module#UserModule'}
 /*  {path: 'user', component: UserComponent},
  {path: 'createuser',component: CreateuserComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
