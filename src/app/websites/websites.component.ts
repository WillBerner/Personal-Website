import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

import descriptions from '../content.json';

@Component({
    selector: 'app-websites',
    templateUrl: './websites.component.html',
    styleUrl: './websites.component.scss',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class WebsitesComponent implements OnInit {

  public websites = descriptions.websites;
  public contactForm!: FormGroup;
  public isSubmitting = false;
  public submissionMessage = '';
  public submissionError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    emailjs.init('mhYYK-GTia4KMXKPZ');
    
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submissionMessage = '';

    const formData = this.contactForm.value;

    // Send email using EmailJS
    emailjs.send(
      'service_od18hs7',
      'template_9f7x8yq',
      {
        to_email: 'will.o.berner@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }
    ).then(
      (response) => {
        this.submissionError = false;
        this.submissionMessage = 'Thank you! Your inquiry has been sent. I\'ll get back to you soon.';
        this.contactForm.reset();
        this.isSubmitting = false;

        // Clear message after 6 seconds
        setTimeout(() => {
          this.submissionMessage = '';
        }, 6000);
      },
      (error) => {
        this.submissionError = true;
        this.submissionMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        this.isSubmitting = false;
      }
    );
  }

}