import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  showMore: boolean = false;
  textButton: string = "Ver más";

  @Input()
  project!: Project;


  getTextoCorto(): string {
    return this.project.description.substring(0, 200);
  }

  toggleShowMore(event: Event): void {
    event.preventDefault();
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.textButton = "Ver menos"
    } else {
      this.textButton = "Ver más";
    }
  }

}
