
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/Project'; // Asegúrate de que la ruta a tu modelo Project sea correcta

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  projects: Project[] = [
    {
      name: "Proyecto seminario",
      description: "Web de adopción de mascotas. Los usuarios pueden explorar una lista de mascotas disponibles para adopción, ver detalles específicos de cada mascota y agregarla a una lista de favoritos.",
      linkRepository: "https://github.com/griseldaalegre/proyecto-seminario-angular",
      img: "path/to/image1.jpg"
    },
    {
      name: "Biblioteca",
      description: " Biblioteca donde se almacenan libros y se registran usuarios para el préstamo de los mismos. En el proyecto se implementaron tres tipos de usuarios, usuario administrador, usuario normal, usuario publico.",
      linkRepository: "https://github.com/user/project2",
      img: "path/to/image2.jpg"
    },
    {
      name: "Portafolio",
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
