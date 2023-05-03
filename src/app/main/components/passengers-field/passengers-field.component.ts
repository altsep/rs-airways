import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { selectRequiredOption } from '../../directives/passengers-validator.directive';
import { PASSENGERS, PassSelectOption } from '../../model/main.interfaces';

@Component({
  selector: 'app-passengers-field',
  templateUrl: './passengers-field.component.html',
  styleUrls: ['./passengers-field.component.scss'],
})
export class PassengersFieldComponent implements OnInit {
  @Input() public formGroupName!: string;

  @ViewChildren('option') public options!: QueryList<MatOption>;

  public passengersForm!: FormGroup;

  public passSelect = new FormControl('', [Validators.required, selectRequiredOption()]);

  public passengers = PASSENGERS;

  public trigger = '';

  constructor(private parentForm: FormGroupDirective) {}

  public ngOnInit(): void {
    this.passengersForm = this.parentForm.control.get(this.formGroupName) as FormGroup;
  }

  private updateTrigger(): void {
    const result = this.options.map((item) => item.value as PassSelectOption);

    if (!result) return;

    this.trigger = result
      .filter((item) => !!item.amount)
      .map((item) => `${item.amount} ${item.name}`)
      .join(', ');
  }

  public onSelect(id: number): void {
    const option = this.options.get(id);

    if (!option) return;
    const val = option.value as PassSelectOption;
    if (val.amount > 0) {
      option.select();
    } else {
      option.deselect();
    }
    this.updateTrigger();
  }
}