import { Component } from '@angular/core';

import text from '../descriptions.json'


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationText = text.education;

}
