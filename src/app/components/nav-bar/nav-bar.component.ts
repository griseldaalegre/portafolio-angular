import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink], // Importa RouterLink ya que el componente es standalone
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          const bsCollapse = new (window as any).bootstrap.Collapse(document.querySelector('#navbarNav'), {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    });
  }
}
