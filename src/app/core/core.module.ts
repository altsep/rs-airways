import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginTabComponent } from './components/auth/login-tab/login-tab.component';
import { SignupTabComponent } from './components/auth/signup-tab/signup-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/header/account/account.component';
import { BookingComponent } from './components/header/booking/booking.component';
import { CartComponent } from './components/header/cart/cart.component';
import { CurrencyMenuComponent } from './components/header/currency-menu/currency-menu.component';
import { DateFormatSelectorComponent } from './components/header/date-format-selector/date-format-selector.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressIndicatorComponent } from './components/header/progress-indicator/progress-indicator.component';
import { SignInComponent } from './components/header/sign-in/sign-in.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrencyMenuComponent,
    DateFormatSelectorComponent,
    SignInComponent,
    CartComponent,
    BookingComponent,
    ProgressIndicatorComponent,
    AccountComponent,
    AuthComponent,
    LoginTabComponent,
    SignupTabComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, AngularFireModule, AngularFireAuthModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
