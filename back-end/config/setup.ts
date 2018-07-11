import sprintTemplateDAO from '../daos/past-Template.dao';
class Setup {
  // Run configuration methods on the Express instance.
  status;
  constructor() {
    this.middleware();
  }

  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all Heroes.
   */
  public async configDefault() {
    const defaultData = [
      { name: 'Instant', duration: 5, status: 'default' },
      { name: 'Very Short', duration: 300, status: 'default' },
      { name: 'Short', duration: 600, status: 'default' },
      { name: 'Pomodoro', duration: 1500, status: 'default' },
      { name: 'Long', duration: 2700, status: 'default' },
      { name: 'Very Long', duration: 3600, status: 'default' }
    ];
    defaultData.forEach(element => {
      (async () => {
        const user = await sprintTemplateDAO.findOne({ name: element.name });
        if (!user) {
          sprintTemplateDAO.create(element);
        }
      })();
    });
  }
}

// Create the setup, and export its configured Express.Router
const setup = new Setup();

export default setup;
