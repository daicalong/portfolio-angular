import { Component, OnInit } from '@angular/core';
import { AirtableApiService } from 'src/app/core/services/http/airtable-api/airtable-api.service';
import { Project, ProjectCategory } from 'src/app/shared/interfaces/project-list';
import { FilterByPipe } from 'ngx-pipes';

@Component({
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  loading: boolean = false;
  projectList?: Project[];
  categoryList?: ProjectCategory[];
  selectedCategory: string = '';
  constructor(private airtableApiService: AirtableApiService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getCategories();
  }

  getProjects(): void {
    this.loading = true;
    this.airtableApiService.getProjectList()
      .subscribe(
        res => this.projectList = res.records,
        error => new Error(error))
      .add(() => this.loading = false);
  }

  getCategories(): void {
    this.loading = true;
    this.airtableApiService.getCategoryList()
      .subscribe(
        res => this.categoryList = res.records,
        error => new Error(error))
      .add(() => this.loading = false);
  }

  filterByCategory(id: string): Project[] {
    if (!this.projectList) return [];
    if (!id) return this.projectList;
    return this.projectList.filter(x => x.fields.CategoryIdList.indexOf(id) !== -1);
  }

}
