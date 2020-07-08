import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  requestId = new FormControl();
  status: any = -1;
  get statusText(){
    if(this.status === null) return "הבקשה ממתינה לאישור...";
    if(this.status === false) return "הבקשה סורבה, לפרטים פנה למנהל הענפי";
    if(this.status === true) return "הבקשה אושרה!";
    return "הבקשה לא קיימת";
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  checkStatus(){
    const params = new HttpParams().set('_id', this.requestId.value)
    this.http.get<boolean>(environment.baseUrl + '/entries/status', { params: params })
      .subscribe((data: boolean) => {
        this.status = data;
        this.snackBar.open(this.statusText, "אוקיי", {duration: 10000})
      })

      
  }

}
