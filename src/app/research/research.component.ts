import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {
  
  public researchText = text.research;

}
