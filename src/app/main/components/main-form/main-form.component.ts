/* eslint-disable no-underscore-dangle */
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnChanges {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      oneWay: fb.control(false, Validators.required),
      airport: fb.group({
        from: fb.control('', Validators.required),
        to: fb.control('', Validators.required),
      }),
      dates: fb.group({
        from: fb.control(new Date(), Validators.required),
        to: fb.control(new Date(), Validators.required),
      }),
      passengers: fb.group({
        adult: fb.control(1, [Validators.required, Validators.min(1)]),
        child: fb.control(0, [Validators.required]),
        infant: fb.control(0, Validators.required),
      }),
    });
  }

  public ngOnChanges(): void {
    // this.searchForm.valueChanges.subscribe((value) => )
    console.log(this.searchForm.valid);
  }

  public onSubmit(): void {
    console.log(this.searchForm.value);
  }
}
