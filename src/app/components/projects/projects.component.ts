import { Component, OnInit } from '@angular/core';
import { AirtableApiService } from 'src/app/core/services/http/airtable-api/airtable-api.service';
import { Project } from 'src/app/shared/interfaces/project-list';

@Component({
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  constructor(private airtableApiService: AirtableApiService) { }
  loading: boolean = false;
  projectList?: Project[];

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.loading = true;
    this.airtableApiService.getProjectList()
      .subscribe(
        res => this.projectList = res.records,
        error => new Error(error))
      .add(() => this.loading = false);
  }
}
