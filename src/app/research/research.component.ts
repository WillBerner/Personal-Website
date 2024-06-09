import { Component } from '@angular/core';

import text from '../descriptions.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [NgFor],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {
  
  public researchText = text.research;

}
