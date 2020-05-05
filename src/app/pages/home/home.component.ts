import { Project } from './../../interfaces/project.interface';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project-service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects:Project[];

  constructor(
    private projSvc: ProjectService
  ) { 
    this.projects = this.projSvc.getAllProjects();
  }

  ngOnInit() {
    
  }

}
