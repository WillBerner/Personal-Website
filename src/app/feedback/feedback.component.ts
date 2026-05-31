import { Component } from '@angular/core';

import text from '../descriptions.json'


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  public feedbackText= text.feedback;
}
