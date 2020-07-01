import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-status-check',
  templateUrl: './status-check.component.html',
  styleUrls: ['./status-check.component.scss']
})
export class StatusCheckComponent implements OnInit {

  requestId: FormControl = new FormControl();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkStatus(){
    this.http.get<boolean>(environment.baseUrl + 'entries/' + this.requestId.value).subscribe((data: boolean) => {
      console.log(data);
    })
  }
}
