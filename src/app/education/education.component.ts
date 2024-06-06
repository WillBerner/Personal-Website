import { Component } from '@angular/core';

import text from '../descriptions.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationText = text.education;

}
