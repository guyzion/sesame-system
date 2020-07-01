import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { StatusCheckComponent } from './status-check/status-check.component'



@NgModule({
  declarations: [GuestPageComponent, StatusCheckComponent],
  imports: [
    CommonModule, 
    SharedModule,
  ],
  exports: [
    GuestPageComponent,
  ]
})
export class GuestModule { }
