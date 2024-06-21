import { Component } from '@angular/core';
import {AnimatedListComponent} from "../animated-list/animated-list.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    AnimatedListComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
