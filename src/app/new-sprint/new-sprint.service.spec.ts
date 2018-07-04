import { TestBed, inject } from '@angular/core/testing';

import { NewSprintService } from './new-sprint.service';

describe('NewSprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewSprintService]
    });
  });

  it('should be created', inject([NewSprintService], (service: NewSprintService) => {
    expect(service).toBeTruthy();
  }));
});
