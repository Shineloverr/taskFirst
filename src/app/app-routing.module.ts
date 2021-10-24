import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'second', component: SecondComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    [ RouterModule.forRoot(routes) ],
  ]
})
export class AppRoutingModule { }
