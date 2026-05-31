import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import text from '../descriptions.json'

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})
export class WorkComponent {

  public workText= text.enterprise;
  public roles = this.workText.descriptions.roles

}
