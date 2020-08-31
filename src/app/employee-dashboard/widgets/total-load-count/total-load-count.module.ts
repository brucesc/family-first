import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalLoadCountComponent } from './total-load-count/total-load-count.component';



@NgModule({
  declarations: [TotalLoadCountComponent],
  imports: [
    CommonModule
  ]
})
export class TotalLoadCountModule {
  static rootComponent = TotalLoadCountComponent;
  constructor() {
    console.log('Lazy loaded TotalLoadCountModule');
  }
 }
