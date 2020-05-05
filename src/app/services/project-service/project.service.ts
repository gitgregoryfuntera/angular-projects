import { Project } from './../../interfaces/project.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  MOCKS = [
    {name: 'sample', description: 'lorem ipsum', projectMembers: [{email: 'john@doe.com'}]}
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
