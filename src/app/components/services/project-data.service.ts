
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/Project'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  projects: Project[] = [
    {
      name: "Tienda",
      description: "Proyecto de tienda web que permite a los usuarios acceder a categorías y listar productos dentro de ellas. Los usuarios pueden agregar productos a un carrito de compras, donde se suma y resta el valor de cada producto según la cantidad de ítems añadidos. La aplicación consume datos desde la API de Fake Store. Se implementaron funcionalidades para visualizar los productos disponibles, mostrando su imagen, nombre, precio y una breve descripción. Además, se puede revisar el carrito en una sección dedicada, donde se puede ajustar la cantidad de productos. Las tecnologías utilizadas para este proyecto fueron Angular, TypeScript, HTML, CSS y Bootstrap.",
      linkRepository: "https://github.com/griseldaalegre/tienda-deco-angular/tree/master",
      linkGitPages: "https://griseldaalegre.github.io/tienda-deco-angular/home",
      img: "assets/tienda.JPG"
    },
    {
      name: "Proyecto seminario",
      description: "Página web de adopción de mascotas que permite a los usuarios explorar una lista de perros disponibles, ver detalles específicos de cada uno y agregar sus favoritos a una lista personal. La aplicación consume datos desde la API de huachitos.cl. Se implementaron las funcionalidades para visualizar las mascotas disponibles, mostrando su imagen, nombre, edad, género y una breve descripción. También se puede agregar mascotas a una lista de favoritos, que se puede revisar en una sección dedicada. Se proporciona información detallada sobre cada mascota al hacer clic en ella, incluyendo su raza y fecha de nacimiento. Se ofrece la posibilidad de eliminar perros de la lista de favoritos según las preferencias del usuario. Las tecnologías utilizadas para este proyecto fueron Angular, TypeScript, HTML y CSS.",
      linkRepository: "https://github.com/griseldaalegre/proyecto-seminario-angular",
      linkGitPages: "https://griseldaalegre.github.io/proyecto-seminario-angular/home",
  img: "assets/seminario.JPG"
    },
    {
      "name": "Biblioteca",
      "description": "Proyecto realizado para la cursada de WEB2 de la facultad. Biblioteca donde se almacenan libros y se registran usuarios para su préstamo. Se implementaron tres tipos de usuarios: Administrador, que puede realizar ABM de libros y categorías; Usuario Normal, que tiene acceso a la lista de libros disponibles; y Usuario Público, que no requiere inicio de sesión y no puede acceder a la lista de libros. La gestión de categorías incluye listar, agregar, editar y eliminar categorías, y el acceso a la base de datos se realiza a través de un archivo config.php, que permite la creación automática de la base de datos con datos iniciales si aún no existe. Las tecnologías utilizadas para este proyecto fueron PHP, MySQL, HTML y CSS.",
      "linkRepository": "https://github.com/griseldaalegre/tpe-web2",
      linkGitPages: "https://griseldaalegre.github.io/tienda-deco-angular/home",
      img: "assets/biblioteca.JPG"
    },
    {
      name: "Portafolio",
      description: "Este portafolio presenta una colección de mis proyectos, donde cada uno está acompañado de una descripción detallada. Además, incluye una API REST hardcodeada que almacena la información de cada proyecto, permitiendo una visualización organizada y accesible. Este proyecto ha sido desarrollado utilizando Angular, HTML, CSS y TypeScript.",
      linkRepository: "https://github.com/griseldaalegre/portafolio-angular",
      linkGitPages: "https://griseldaalegre.github.io/portafolio-angular/home",
       img: "assets/portafolio.JPG"
    },
    {
      name: "Primer proyecto",
      description: "Este es el primer proyecto realizado en grupo para la cursada de Web1 de la carrera TUDAI. En este proyecto, desarrollamos una página web utilizando HTML, CSS y JavaScript como tecnologías principales. Implementamos una API REST y utilizamos AJAX para la carga dinámica de contenido y navegación mediante partial render.",
      linkRepository: "https://github.com/griseldaalegre/primer-proyecto",
      linkGitPages: "https://griseldaalegre.github.io/primer-proyecto/",
      img: "assets/primerProyecto.JPG"
    }
  ];

  constructor() { }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
