import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  signupForm = new FormGroup({
    signupEmail: new FormControl('')
  })

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  generateEmail() {
    // check if signupEmail is empty
    const email = this.signupForm.getRawValue().signupEmail;

    if (email === '') {
      return window.alert('Please enter email address!');
    }

    this.registerService.register({email}).subscribe((res: any) => {
        window.alert(`Registration email has been sent to ${email}`);
    })
    // console.log('setting email in local storage', email);
    window.localStorage.setItem('email', email || '');
    
    this.signupForm.reset();
  } 
}

// TODO: Work on Signin Page and styling previous pages (main, signup)..