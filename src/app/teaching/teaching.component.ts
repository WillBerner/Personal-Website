import { Component } from '@angular/core';

import text from '../descriptions.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [NgFor],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {
  
  public teachingText = text.teaching;

}
