import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Area } from '../interfaces/area.interface';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  baseUrl = environment.baseUrl;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  compounds: Area[];
  filteredCompounds: Observable<Area[]>;
  units: Area[];
  filteredUnits: Observable<Area[]>;
  compound: AbstractControl;
  unit: AbstractControl;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      compound: ['', Validators.required],
      unit: ['', Validators.required],
      startTime: [new Date(), Validators.required],
      endTime: [new Date(), Validators.required],
    });
    
    this.compound = this.secondFormGroup.controls.compound;
    this.unit = this.secondFormGroup.controls.unit;

    this.compound.valueChanges.subscribe(() => this.unit.setValue(''));

    this.http.get(this.baseUrl + 'compounds').subscribe((data: Area[]) =>{
      console.log(data);
      this.compounds = data;
      this.filteredCompounds = this.compound.valueChanges
        .pipe(startWith(''), map(value => this._filterAreas(this.compounds, value)));
    });
    
    this.http.get(this.baseUrl + 'units').subscribe((data: Area[]) =>{
      console.log(data);
      this.units = data;
      this.filteredUnits = this.unit.valueChanges
        .pipe(startWith(''), map(value => this._filterAreas(this.units, value)), map(list => this._filterUnits(list)));
    });

  }

  private _filterAreas = (list: Area[], filterValue: string) => list.filter(area => area.name.includes(filterValue));
  private _filterUnits = (list: Area[]) => list.filter(unit => unit.parentId == this.compound.value._id);

  getOptionName = (option: Area) => option.name; 

}
