import { Component } from '@angular/core';

import text from '../descriptions.json'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  public workText:string = text.work;

}
