import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import descriptions from '../descriptions.json';

interface FreelanceProject {
  name: string;
  type: string;
  description: string;
  stack: string[];
  url: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './freelance.component.html',
  styleUrl: './freelance.component.scss'
})
export class FreelanceComponent {

  public freelance = descriptions.freelance;

  projects: FreelanceProject[] = [
    {
      name: 'Client Site One',
      type: 'Small Business',
      description: 'Brief description of what the site does and who it is for.',
      stack: ['Angular', 'Bootstrap', 'SCSS'],
      url: 'https://example.com'
    },
    {
      name: 'Client Site Two',
      type: 'Portfolio',
      description: 'Brief description of what the site does and who it is for.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://example.com'
    },
    // Add more projects here
  ];

}