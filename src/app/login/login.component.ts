import { Component } from '@angular/core';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Icons
  faUser = faUser;
  password = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  type: string = "password";
  isText: boolean = false;
  eye = faEyeSlash;

  hideShowPassword(): void {
    this.isText = !this.isText;
    this.isText ? this.eye = faEye : this.eye = faEyeSlash;
    this.isText ? this.type ="text" : this.type = "password";
  }
}
