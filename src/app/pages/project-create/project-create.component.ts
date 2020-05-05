import { Project } from './../../interfaces/project.interface';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project-service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {


  project: Project = {
    name: '',
    description: '',
    projectMembers: [],
  };

  emailValue: string = '';

  constructor(
    private projSvc: ProjectService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  onAddMembers(emailInput) {
    let tempEmail = {email: this.emailValue};
    this.project.projectMembers.push(tempEmail);
    emailInput.value = '';
  }

  removeMember(idx: number) {
    this.project.projectMembers.splice(idx, 1);
  }

  onCreate() {
    console.log(this.project);
    this.projSvc.insertProject(this.project);
    console.log(this.projSvc.getAllProjects());
    this.router.navigateByUrl('/home');
  }

}
