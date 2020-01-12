import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
const routes: Routes = [
  { path: 'pageOne', component: PageOneComponent },
  
  { path: '',
    redirectTo: '/pageOne',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
