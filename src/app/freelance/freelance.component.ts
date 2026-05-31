import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import descriptions from '../descriptions.json';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './freelance.component.html',
  styleUrl: './freelance.component.scss'
})
export class FreelanceComponent {

  public freelance = descriptions.freelance;

}