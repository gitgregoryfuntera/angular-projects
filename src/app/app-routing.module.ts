import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ProjectCreateModule } from './pages/project-create/project-create.module';
import { ProjectViewModule } from './pages/project-view/project-view.module';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'project-create',
    loadChildren: () => import('./pages/project-create/project-create.module').then(m => m.ProjectCreateModule),
  },
  {
    path: 'project-view/:id',
    loadChildren: () => import ('./pages/project-view/project-view.module').then(m => m.ProjectViewModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [
    RouterModule,
    HomeModule,
    ProjectCreateModule,
    ProjectViewModule
  ]
})
export class AppRoutingModule { }
