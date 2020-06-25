import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GuestPageComponent } from './guest-page/guest-page.component'



@NgModule({
  declarations: [GuestPageComponent],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    GuestPageComponent,
  ]
})
export class GuestModule { }
