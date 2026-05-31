import { Component } from '@angular/core';


import text from '../descriptions.json'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  public aboutMeText = text.home;

}
