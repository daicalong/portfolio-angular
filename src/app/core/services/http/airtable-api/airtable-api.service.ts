import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectCategory, ProjectCategoryList, ProjectList } from 'src/app/shared/interfaces/project-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirtableApiService {
  token?: string = environment.airtableApiKey;
  url = 'https://api.airtable.com/v0/appWtGcSZHIQOOb33/';
  projectList: string = 'ProjectList';
  categoryList: string = 'Categories';
  tagList: string = 'Tags';
  constructor(public http: HttpClient) { }

  getProjectList(): Observable<ProjectList> {
    if (this.token) return this.http.get<ProjectList>(this.url + this.projectList, {
      headers: {
        Authorization: this.token
      }
    });
    else return new Observable<ProjectList>();
  }

  getCategoryList(): Observable<ProjectCategoryList> {
    if (this.token) return this.http.get<ProjectCategoryList>(this.url + this.categoryList, {
      headers: {
        Authorization: this.token
      }
    });
    else return new Observable<ProjectCategoryList>();
  }


}
