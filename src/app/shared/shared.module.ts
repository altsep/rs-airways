import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [MaterialModule, RouterModule],
  exports: [MaterialModule],
})
export class SharedModule {}
