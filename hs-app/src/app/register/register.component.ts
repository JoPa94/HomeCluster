import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    isEmailValid: any;
    applyForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    })

    validateMail(arg0: string) {
    throw new Error('Method not implemented.');
    }

    login() {
    throw new Error('Method not implemented.');
    }

    submitApplication() {
        throw new Error('Method not implemented.');
    }
}
