import { Component, ChangeDetectionStrategy } from '@angular/core';

import text from '../content.json'


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './education.component.scss'
})
export class EducationComponent {

  public educationText = text.education;

}
