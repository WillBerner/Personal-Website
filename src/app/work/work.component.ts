import { Component } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';

import text from '../descriptions.json'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  public workText= text.enterprise;
  public roles = this.workText.descriptions.roles

}
