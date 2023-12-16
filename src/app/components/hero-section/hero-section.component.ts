import {Component} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  public readonly positions = [
    'HTML/CSS Coder', 'Web Developer', 'UI Developer'
  ]
}
