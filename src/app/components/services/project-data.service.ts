
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/Project'; // Asegúrate de que la ruta a tu modelo Project sea correcta

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  projects: Project[] = [
    {
      name: "Project 1",
      description: "Description of Project 1",
      linkRepository: "https://github.com/user/project1",
      img: "path/to/image1.jpg"
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      linkRepository: "https://github.com/user/project2",
      img: "path/to/image2.jpg"
    },
    {
      name: "Project 1",
      description: "Description of Project 1",
      linkRepository: "https://github.com/user/project1",
      img: "path/to/image1.jpg"
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      linkRepository: "https://github.com/user/project2",
      img: "path/to/image2.jpg"
    },
    {
      name: "Project 1",
      description: "Description of Project 1",
      linkRepository: "https://github.com/user/project1",
      img: "path/to/image1.jpg"
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      linkRepository: "https://github.com/user/project2",
      img: "path/to/image2.jpg"
    },
    {
      name: "Project 1",
      description: "Description of Project 1",
      linkRepository: "https://github.com/user/project1",
      img: "path/to/image1.jpg"
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      linkRepository: "https://github.com/user/project2",
      img: "path/to/image2.jpg"
    }



  ];

  constructor() { }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
