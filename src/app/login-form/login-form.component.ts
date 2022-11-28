import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  onSubmit() {

    console.log('Username:' + this.loginForm.get('username')?.value);
    console.log('Password:' + this.loginForm.get('password')?.value);
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
}
