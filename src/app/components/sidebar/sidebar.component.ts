import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly menuItems = [
    {
      name: 'Home',
      alias: 'home'
    },
    {
      name: 'About me',
      alias: 'about'
    },
    {
      name: 'Skills',
      alias: 'skills'
    },
    {
      name: 'Experience',
      alias: 'experience'
    },
    {
      name: 'My CodePens',
      alias: 'codepens'
    },
    {
      name: 'Testimonials',
      alias: 'testimonials'
    },
    {
      name: 'Contacts',
      alias: 'contacts'
    },
  ]
}
