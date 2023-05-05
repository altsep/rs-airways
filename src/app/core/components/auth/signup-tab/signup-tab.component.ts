/* eslint-disable import/no-extraneous-dependencies */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import countryList from 'country-list';
import countryTelData from 'country-telephone-data';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Subject, delay, of } from 'rxjs';
import { passwordStrengthValidator } from '../../../directives/password-strength-validator.directive';
import { RegistrationRequest } from '../../../models/requests.models';
import { AuthService } from '../../../services/auth.service';

interface SignupForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  dateOfBirth: FormControl<Date | null>;
  confirm: FormControl<boolean | null>;
  gender: FormControl<string | null>;
  citizenship: FormControl<string | null>;
  countryCode: FormControl<string | null>;
  phone: FormControl<string | null>;
}

@Component({
  selector: 'app-signup-tab',
  templateUrl: './signup-tab.component.html',
  styleUrls: ['./signup-tab.component.scss'],
})
export class SignupTabComponent implements OnInit {
  public form: FormGroup<SignupForm>;

  public isLoading$ = new Subject<boolean>();

  @Output() public closeModal = new EventEmitter<void>();

  public maxDate = new Date();

  public countryNames = countryList.getNames();

  public countryCodes = countryTelData.allCountries.map(
    ({ name, dialCode }) => `${name.split(' (')[0]} (+${dialCode})`
  );

  constructor(fb: FormBuilder, private authService: AuthService, private socialAuth: SocialAuthService) {
    this.form = fb.group<SignupForm>({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        passwordStrengthValidator(),
      ]),
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      dateOfBirth: new FormControl(null, Validators.required),
      confirm: new FormControl(null, Validators.required),
      gender: new FormControl('', Validators.required),
      citizenship: new FormControl(''),
      countryCode: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('\\d+')]),
    });
  }

  public ngOnInit(): void {
    this.socialAuth.authState.subscribe((user) => {
      this.authService.signup({
        firstName: user.firstName,
        lastName: user.lastName,
        gender: 'm',
        citizenship: '',
        countryCode: '',
        dateOfBirth: '01-01-1990',
        phone: '',
        email: user.email,
        password: user.id,
      });
    });
  }

  public close(): void {
    this.closeModal.emit();
  }

  public onSubmit(): void {
    const dateOfBirth = this.form.value.dateOfBirth?.toISOString() as string;
    const countryCode = this.form.value.countryCode?.replace(/[^+\d]/g, '') as string;
    const data = { ...this.form.value, dateOfBirth, countryCode };
    this.authService.signup(data as RegistrationRequest);

    this.isLoading$.next(true);

    of(false)
      .pipe(delay(300))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.close();
      });
  }
}
