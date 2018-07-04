import { OngoingSprintModule } from './ongoing-sprint.module';

describe('OngoingSprintModule', () => {
  let ongoingSprintModule: OngoingSprintModule;

  beforeEach(() => {
    ongoingSprintModule = new OngoingSprintModule();
  });

  it('should create an instance', () => {
    expect(ongoingSprintModule).toBeTruthy();
  });
});
