import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import descriptions from '../descriptions.json';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent {

  public websites = descriptions.websites;

}