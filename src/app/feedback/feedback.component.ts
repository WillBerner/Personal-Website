import { Component } from '@angular/core';

import text from '../descriptions.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  public feedbackText= text.feedback;
}
