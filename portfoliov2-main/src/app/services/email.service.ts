// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://your-backend.com/send-email'; // URL to your server-side endpoint

  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
