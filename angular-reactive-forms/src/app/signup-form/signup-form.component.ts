import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {



  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(10),
                    UsernameValidators.cannotContainSpace
                    //Validators.pattern('Anshul')
                  ],UsernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
