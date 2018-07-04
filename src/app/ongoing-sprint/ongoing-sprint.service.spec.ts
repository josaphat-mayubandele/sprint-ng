import { TestBed, inject } from '@angular/core/testing';

import { OngoingSprintService } from './ongoing-sprint.service';

describe('OngoingSprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OngoingSprintService]
    });
  });

  it('should be created', inject([OngoingSprintService], (service: OngoingSprintService) => {
    expect(service).toBeTruthy();
  }));
});
