import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { NavBarComponent } from "../../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: []
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) { }


}
