import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email: any | undefined;
  // mobile: any | undefined;

  // constructor(private router: Router) {}
  // login() {
  //   // Perform email and mobile validation here

  //   // Navigate to Dashboard and pass data
  //   this.router.navigate(['dashboard']);
  // }

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {

      // const emailId this.loginForm.get('email').value;
      // this.name.setValue('Nancy');
      var emailId = this.loginForm.controls['email'].value;

      this.router.navigate(['/dashboard'], {
        queryParams: { emailId }
      });
    } else {
      // Form is invalid, show error messages or handle as needed
    }
  }

}
