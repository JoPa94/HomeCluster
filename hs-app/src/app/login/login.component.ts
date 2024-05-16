import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isEmailValid: boolean = true;
    url = 'http://localhost:3000/accounts'
    
    applyForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    })
    
    submitApplication(){
        let fn = this.applyForm.value.firstName
        let ln = this.applyForm.value.lastName ?? ''
        let em = this.applyForm.value.email ?? ''
        console.log("First: " + fn + " Last: " + ln + " email: " + em)
    }
    login(){
        window.alert("Yes!")
    }
    register(){
        
    }
    validateMail(email: string){
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.isEmailValid = email ? emailRegex.test(email) : true;
    }

    // async getAccounts(): Promise<Account[]>{
    //     const data = await fetch(this.url)
    //     return await data.json() ?? ["emptyArray"];
    // }
    // async getAccountsById(id: Number): Promise<Account[]>{
    //     const data = await fetch(`${this.url}/${id}`)
    //     return await data.json() ?? ["emptyArray"];
    // }

    // constructor(){
    //     this.Account.getAccounts().then()
    // }

}
