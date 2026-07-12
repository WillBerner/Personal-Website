import { Component, ChangeDetectionStrategy } from '@angular/core';


import text from '../content.json'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  public aboutMeText = text.home;

}
