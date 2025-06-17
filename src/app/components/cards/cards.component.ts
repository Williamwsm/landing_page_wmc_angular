import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWrench, faShieldAlt, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cards',
  imports: [FontAwesomeModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  faWrench = faWrench;
  faShieldAlt = faShieldAlt;
  faCog = faCog;
  faCheckCircle = faCheckCircle;

}
