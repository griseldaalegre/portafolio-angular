import { Component, SimpleChanges } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { Project } from '../../models/Project';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CardComponent]
})
export class ProjectsComponent {
 projects: Project[]=[];
      
 constructor(private projectDataService: ProjectDataService){

 this.projects = this.projectDataService.getAllProjects();
 }

 ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
