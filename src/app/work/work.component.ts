import { Component } from '@angular/core';

import text from '../content.json'

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})
export class WorkComponent {

  public workText= text.enterprise;
  public roles = this.workText.descriptions.roles

}
