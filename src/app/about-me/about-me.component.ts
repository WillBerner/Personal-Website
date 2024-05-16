import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  public aboutMeText:string = text.aboutMe;
  
}
