import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadAssignmentTableComponent } from './load-assignment-table/load-assignment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [LoadAssignmentTableModule.rootComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [LoadAssignmentTableModule.rootComponent]
})
export class LoadAssignmentTableModule { 
  static rootComponent = LoadAssignmentTableComponent;
  constructor() {
    console.log('lazy loaded LoadAssignmentTableModule');
  }
}
