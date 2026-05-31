import { Component } from '@angular/core';

import text from '../content.json'


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationText = text.education;

}
