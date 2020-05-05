import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../../app-material/app-material.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'project-view/:id', component: ProjectViewComponent}
];


@NgModule({
  declarations: [
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectViewModule { }
