import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tt-mentors-profile',
  standalone: true,
  imports: [CardComponent, MatIconModule],
  templateUrl: './mentors-profile.component.html',
  styleUrl: './mentors-profile.component.scss'
})
export class MentorsProfileComponent {

}
