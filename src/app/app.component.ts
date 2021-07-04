import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  time: Date = new Date();
  url: string = 'https://api.airtable.com/v0/appWtGcSZHIQOOb33/Project%20List';
  list: any;
  options:any = {
    headers: {
      Authorization: 'Bearer keyZ5CpEswS5gndC1'
    },
    };
  constructor(public http: HttpClient) {

  }


  ngOnInit(): void {
    this.http.get(this.url, this.options).subscribe(res => this.list = res);
  }
}

