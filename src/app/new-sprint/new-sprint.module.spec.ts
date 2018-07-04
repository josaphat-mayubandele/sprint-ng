import { NewSprintModule } from './new-sprint.module';

describe('NewSprintModule', () => {
  let newSprintModule: NewSprintModule;

  beforeEach(() => {
    newSprintModule = new NewSprintModule();
  });

  it('should create an instance', () => {
    expect(newSprintModule).toBeTruthy();
  });
});
