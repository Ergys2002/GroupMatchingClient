import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SweetAlertService} from "../../services/sweet-alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private swal: SweetAlertService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: result => {
        this.swal.successNotification("Login", "Logged in succesfully")
        setTimeout(() => {
          this.router.navigateByUrl('/home-page');
        }, 1000);      },
      error : err => {this.swal.failNotification("Login", "Invalid Credentials")
      }
    })

  }


}
