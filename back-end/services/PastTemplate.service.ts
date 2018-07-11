/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';
import pastTemplateSchemaDAO from '../daos/past-Template.dao';
/*
// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
  // Reply with a hello world when no name param is provided
  res.send('Hello, World!1');
});

router.get('/:name', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  const { name } = req.params;

  // Greet the given name
  res.send(`Hello, ${name}`);
});
export const PastTemplateController: Router = router;*/
// Creates and configures an ExpressJS web server.
class PastTemplateService {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }
  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all element.
   */
  // tslint:disable-next-line:member-ordering
  public async getTemplates() {
    console.log('service getTemplates');
    const Templates = await pastTemplateSchemaDAO.find();
    return Templates;
  }

  /**
   * CREATE element.
   */
  public create(pastTemplate) {
    const pastTemplateCreated = pastTemplateSchemaDAO.create(pastTemplate);
    return;
  }

  /**
   * Delete all element.
   */
  public async delete(element) {
    const Templates = await pastTemplateSchemaDAO.remove({ name: element });
    return;
  }
}

// Create the HeroRouter, and export its configured Express.Router
const pastTemplateService = new PastTemplateService();

export default pastTemplateService;
