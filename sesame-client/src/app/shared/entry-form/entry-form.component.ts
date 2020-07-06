import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Area } from '../interfaces/area.interface';
import { environment } from '../../../environments/environment';
import { Entry } from '../interfaces/entry.interface';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  baseUrl = environment.baseUrl;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  compounds: Area[];
  filteredCompounds: Observable<Area[]>;
  branches: Area[];
  filteredBranches: Observable<Area[]>;
  compound: AbstractControl;
  branch: AbstractControl;
  requestId: string;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      licensePlateNumber: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      compound: ['', Validators.required],
      branch: ['', Validators.required],
      isEscorted: [false],
      startTime: [new Date(), Validators.required],
      endTime: [new Date(), Validators.required],
      comments: [''],
    });

    this.compound = this.secondFormGroup.controls.compound;
    this.branch = this.secondFormGroup.controls.branch;

    this.compound.valueChanges.subscribe(() => this.branch.setValue(''));

    this.http.get(this.baseUrl + '/compounds').subscribe((data: Area[]) =>{
      console.log(data);
      this.compounds = data;
      this.filteredCompounds = this.compound.valueChanges
        .pipe(startWith(''), map(value => this._filterAreas(this.compounds, value)));
    });
    
    this.http.get(this.baseUrl + '/branches').subscribe((data: Area[]) =>{
      console.log(data);
      this.branches = data;
      this.filteredBranches = this.branch.valueChanges
        .pipe(startWith(''), map(value => this._filterAreas(this.branches, value)), map(list => this._filterBranches(list)));
    });

  }

  private _filterAreas = (list: Area[], filterValue: string) => list.filter(area => area.name.includes(filterValue));
  private _filterBranches = (list: Area[]) => list.filter(branch => branch.parentId == this.compound.value._id);

  getOptionName = (option: Area) => option.name; 

  sendRequest(){
    let entry: Entry = {
      id: this.firstFormGroup.controls.id.value,
      name: this.firstFormGroup.controls.name.value,
      licensePlateNumber: this.firstFormGroup.controls.licensePlateNumber.value,
      compoundId: this.compound.value._id,
      branchId: this.branch.value._id,
      isEscorted: this.secondFormGroup.controls.isEscorted.value,
      startDate: this.secondFormGroup.controls.startTime.value,
      endDate: this.secondFormGroup.controls.endTime.value,
      comments: this.secondFormGroup.controls.comments.value,
    }

    console.log(entry);

    this.http.post<Entry>(this.baseUrl + '/entries', entry).subscribe(data =>{
      console.log(data);
      this.requestId = data._id;
    });
  }

}
