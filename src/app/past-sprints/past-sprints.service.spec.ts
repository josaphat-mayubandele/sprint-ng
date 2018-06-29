import { TestBed, inject } from '@angular/core/testing';

import { PastSprintsService } from './past-sprints.service';

describe('PastSprintsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastSprintsService]
    });
  });

  it('should be created', inject([PastSprintsService], (service: PastSprintsService) => {
    expect(service).toBeTruthy();
  }));
});
