import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public aboutMeText:string = text.home;

}
