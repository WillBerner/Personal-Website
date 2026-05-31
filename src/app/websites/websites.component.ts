import { Component } from '@angular/core';


import descriptions from '../content.json';

@Component({
    selector: 'app-work',
    templateUrl: './websites.component.html',
    styleUrl: './websites.component.scss'
})
export class WebsitesComponent {

  public websites = descriptions.websites;

}