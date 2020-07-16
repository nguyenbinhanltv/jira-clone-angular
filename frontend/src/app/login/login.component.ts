import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginPayload } from '@trungk18/project/auth/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    try {
      this.authService.login(
        new LoginPayload(
          {
            email: this.validateForm.value.email,
            password: this.validateForm.value.password
          })
      );
      this.notification.create(
        'success',
        'Login successfully.',
        ''
      );

      sessionStorage.setItem('email', this.validateForm.value.email);
      sessionStorage.setItem('password', this.validateForm.value.password);

      this.router.navigate(['/project']);
    } catch (err) {
      this.notification.error(
        'error',
        'Login fail.'
      );
    }
  }

}
