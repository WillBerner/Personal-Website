import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {
  
  public teachingText:string = text.teaching;

}
