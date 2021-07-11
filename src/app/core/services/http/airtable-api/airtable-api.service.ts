import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectList } from 'src/app/shared/interfaces/project-list';
import { environment } from 'src/environments/environment';
require('dotenv').config();

@Injectable({
  providedIn: 'root'
})
export class AirtableApiService {
  token?: string = process.env.AIRTABLE_API_KEY;
  url = 'https://api.airtable.com/v0/appWtGcSZHIQOOb33/ProjectList';

  constructor(public http: HttpClient) { }

  getProjectList(): Observable<ProjectList> {
    if (this.token) return this.http.get<ProjectList>(this.url, {
      headers: {
        Authorization: this.token
      }
    });
    else return new Observable<ProjectList>();
  }
}
