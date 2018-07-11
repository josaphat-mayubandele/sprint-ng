import { TestBed, inject } from '@angular/core/testing';

import { SprintTemplateService } from './sprint-template.service';

describe('SprintTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprintTemplateService]
    });
  });

  it('should be created', inject(
    [SprintTemplateService],
    (service: SprintTemplateService) => {
      expect(service).toBeTruthy();
    }
  ));
});
