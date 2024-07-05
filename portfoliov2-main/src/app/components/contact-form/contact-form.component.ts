// contact-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe(
        response => {
          console.log('Email sent successfully!');
        },
        error => {
          console.error('There was an error sending the email', error);
        }
      );
    }
  }
}
