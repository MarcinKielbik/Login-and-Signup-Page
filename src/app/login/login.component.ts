import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  hideShowPassword(): void {
    this.isText = !this.isText;
    this.isText ? this.eye = faEye : this.eye = faEyeSlash;
    this.isText ? this.type ="text" : this.type = "password";
  }


  onSubmit(): void {
    if(this.loginForm.valid) {
      //Send the objcet to the database

      console.log(this.loginForm.value)
    } else {
      console.log('Form is not valid')
      //throw the error
      this.validateAllFormFields(this.loginForm);
      alert('Your form is invalid!');
    }
  }

  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl) {
        control.markAsDirty({onlySelf: true})
      } else if(control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  } 
}
