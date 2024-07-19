import { Component } from '@angular/core';
//import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  formations: any[] = [
    {
      title: "Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas",
      description: "2023-Actualidad. Universidad Nacional del Centro."
    },
    {
      title: "Seminario de Angular",
      description: "2024. Universidad Nacional del Centro."
    },
    {
      title: "Fundamentos de Angular",
      description: "2024. Crehana."
    },
    {
      title: "Software Tester QA",
      description: "2022. Educación IT."
    },
    {
      title: "Curso de Análisis y Diseño de Casos de Pruebas",
      description: "2022. Educación IT."
    },
    {
      title: "Programador Web",
      description: "Centro de Formación profesional n 403."
    },
    {
      title: "Programador full stack",
      description: "Programa Oracle Next Education, Alura Latam."
    },
    {
      title: "Curso ...",
      description: "2022. Educación IT."
    }
  ];

}
