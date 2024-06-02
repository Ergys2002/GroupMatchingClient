import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SweetAlertService} from "../../services/sweet-alert.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private swal: SweetAlertService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      position: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
    this.authService.signup(this.signUpForm.value).subscribe({
      next: result => {
        this.swal.successNotification("Sign Up", "Registered succesfully")
        setTimeout(() => {
          this.router.navigateByUrl('/home-page');
        }, 1000);      },
      error : err => {this.swal.failNotification("Sign Up", "Invalid Credentials")
      }
    })

  }


}
