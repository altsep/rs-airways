import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, delay, of, timeout } from 'rxjs';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/requests.models';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.scss'],
})
export class LoginTabComponent implements OnInit {
  public form: FormGroup<LoginForm>;

  public socialUser!: SocialUser;

  public isLoggedin = false;

  public hidePassword = true;

  public isLoading$ = new Subject<boolean>();

  @Output() public closeModal = new EventEmitter<void>();

  constructor(fb: FormBuilder, private authService: AuthService, private socialAuth: SocialAuthService) {
    this.form = fb.group({
      email: new FormControl('', [Validators.maxLength(16)]),
      password: new FormControl('', [Validators.maxLength(32)]),
    });
  }

  public ngOnInit(): void {
    this.socialAuth.authState.subscribe((user) => {
      this.socialUser = user;
      if (user != null) this.authService.login({ email: user.email, password: user.id });
    });
  }

  public close(): void {
    this.closeModal.emit();
  }

  public onSubmit(): void {
    this.authService.login(this.form.value as LoginRequest);

    this.isLoading$.next(true);

    of(false)
      .pipe(delay(300))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.close();
      });
  }
}
