import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadCountByQueueComponent } from './load-count-by-queue/load-count-by-queue.component';

@NgModule({
  declarations: [LoadCountByQueueComponent],
  imports: [
    CommonModule
  ]
})
export class LoadCountByQueueModule { 
  static rootComponent = LoadCountByQueueComponent;
  constructor() {
    console.log('lazy loaded LoadCountByQueueModule');
  }
}
