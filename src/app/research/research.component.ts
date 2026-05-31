import { Component } from '@angular/core';

import text from '../content.json'


@Component({
    selector: 'app-research',
    templateUrl: './research.component.html',
    styleUrl: './research.component.scss'
})
export class ResearchComponent {
  
  public researchText = text.research;

}
