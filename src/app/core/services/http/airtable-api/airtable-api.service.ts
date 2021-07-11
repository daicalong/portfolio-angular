import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectList } from 'src/app/shared/interfaces/project-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirtableApiService {
  token: string = environment.airtableApiKey;
  url = 'https://api.airtable.com/v0/appWtGcSZHIQOOb33/ProjectList';

  constructor(public http: HttpClient) { }

  getProjectList(): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.url, {
      headers: {
        Authorization: this.token
      }
    });
  }
}
