import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { AirtableApiService } from './core/http/airtable-api/airtable-api.service';
import { Project } from './shared/interfaces/project-list';
import { Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portfolio';
  list: Project[] = [];
  navRoutes: Routes = routes;
  constructor(public http: HttpClient, public airtableApiService: AirtableApiService) {

  }


  ngOnInit(): void {
    this.airtableApiService.getProjectList().subscribe(res => this.list = res.records);
  }
}

