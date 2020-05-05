import { AppMaterialModule } from './../../app-material/app-material.module';
import { ProjectCreateComponent } from './project-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'project-create', component: ProjectCreateComponent}
];

@NgModule({
  declarations: [
    ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectCreateModule { }
