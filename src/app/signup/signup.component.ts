import { Component } from '@angular/core';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
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
