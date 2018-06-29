import { PastSprintsModule } from './past-sprints.module';

describe('PastSprintsModule', () => {
  let pastSprintsModule: PastSprintsModule;

  beforeEach(() => {
    pastSprintsModule = new PastSprintsModule();
  });

  it('should create an instance', () => {
    expect(pastSprintsModule).toBeTruthy();
  });
});
