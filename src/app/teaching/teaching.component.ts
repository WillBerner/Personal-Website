import { Component, ChangeDetectionStrategy } from '@angular/core';

import text from '../content.json'


@Component({
    selector: 'app-teaching',
    templateUrl: './teaching.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './teaching.component.scss'
})
export class TeachingComponent {
  
  public teachingText = text.teaching;

}
