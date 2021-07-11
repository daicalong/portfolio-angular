import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProjectList } from 'src/app/shared/interfaces/project-list';

import { AirtableApiService } from './airtable-api.service';

describe('AirtableApiService', () => {
  let service: AirtableApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProjectList() should return ProjectList model', (done:DoneFn)=> {
    expect(service.getProjectList()).toBeInstanceOf(Observable);
    done();
  })


});
