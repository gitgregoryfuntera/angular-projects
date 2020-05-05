import { Project } from './../../interfaces/project.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  MOCKS = [
    {name: 'Sample Project Name', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin libero quis bibendum dapibus. Maecenas quis velit ut diam gravida varius sit amet in nunc. ', projectMembers: [{email: 'john@doe.com'}]}
  ];
  constructor() { }

  public getAllProjects() {
    return this.MOCKS;
  }

  public getProject(index: number) {
    return this.MOCKS[index];
  }

  public insertProject(project: Project) {
    this.MOCKS.push(project);
  }

  
}
