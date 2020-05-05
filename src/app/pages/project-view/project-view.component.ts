import { ProjectService } from 'src/app/services/project-service/project.service';
import { Project } from './../../interfaces/project.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  
  projIndex: number;

  project: Project = {
    name: '',
    description: '',
    projectMembers: [],
  };

  emailValue: string = '';

  constructor(
    private projSvc: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    
   
  }

  ngOnInit() {
    this.projIndex =  parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.project = this.projSvc.getProject(this.projIndex);
  }

  onAddMembers(emailInput) {
    let tempEmail = {email: this.emailValue};
    this.project.projectMembers.push(tempEmail);
    emailInput.value = '';
  }

  removeMember(idx: number) {
    this.project.projectMembers.splice(idx, 1);
  }


  onDeleteProj() {
    this.projSvc.getAllProjects().splice(this.projIndex, 1);
    this.router.navigateByUrl('/home');
  }

}
