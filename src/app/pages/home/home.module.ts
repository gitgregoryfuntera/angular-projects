import { AppMaterialModule } from './../../app-material/app-material.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
