import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import text from '../descriptions.json'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public aboutMeText = text.home;

}
