import { Component, ChangeDetectionStrategy } from '@angular/core';

import text from '../content.json'


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  public feedbackText= text.feedback;
}
