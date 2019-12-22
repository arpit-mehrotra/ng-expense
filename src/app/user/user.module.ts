import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CreateuserComponent } from './createuser.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const routeConfig: Routes = [
  {path: '',component: UserComponent},
  {path: 'createuser',component: CreateuserComponent}
]

@NgModule({
  declarations: [UserComponent, CreateuserComponent],
  imports: [
    CommonModule,MaterialModule,FormsModule, RouterModule.forChild(routeConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
