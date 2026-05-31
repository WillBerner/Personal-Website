import { Component } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';

import text from '../descriptions.json'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgClass, ],
  templateUrl: './freelance.component.html',
  styleUrl: './freelance.component.scss'
})
export class FreelanceComponent {

  public freelanceText= text.freelance;

}
