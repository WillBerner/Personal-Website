import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationText:string = text.education;

}
