import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatTableModule],
  exports: [MatCardModule, MatTableModule, MatDividerModule, MatIconModule, MatMenuModule],
})
export class MaterialModule {}
