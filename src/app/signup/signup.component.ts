import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  // Icons
  faUser = faUser;
  password = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  type: string = "password";
  isText: boolean = false;
  eye = faEyeSlash;

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {} 

  hideShowPassword(): void {
    this.isText = !this.isText;
    this.isText ? this.eye = faEye : this.eye = faEyeSlash;
    this.isText ? this.type ="text" : this.type = "password";
  }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignup(): void {
    if(this.signupForm.valid) {
      //Send the objcet to the database

      console.log(this.signupForm.value)
    } else {
      console.log('Form is not valid')
      //throw the error
      this.validateAllFormFields(this.signupForm);
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
