import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [EntryFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    EntryFormComponent,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
  providers:[
    MatNativeDateModule,
  ]
})
export class SharedModule { }
