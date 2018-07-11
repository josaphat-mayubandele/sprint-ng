/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';
import pastSprintSchemaDAO from '../daos/past-sprint.dao';
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
export const PastsprintController: Router = router;*/
// Creates and configures an ExpressJS web server.
class PastSprintService {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }
  pastSprintCreated;
  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all Heroes.
   */
  // tslint:disable-next-line:member-ordering
  public async getSprints(userId) {
    console.log('service ' + userId);
    const sprints = await pastSprintSchemaDAO.find({ user: userId });
    return sprints;
  }

  /**
   * GET all Heroes.
   */
  public async create(pastSprint) {
    this.pastSprintCreated = await pastSprintSchemaDAO.create(pastSprint);
    // console.log(this.pastSprintCreated);
    return this.pastSprintCreated;
  }

  /**
   * Delete all Heroes.
   */
  public deleteAll(userId) {
    console.log('delete ' + userId);
    // userId = 'auth0|5b42f036a177ac1965fba39a';
    const sprints = pastSprintSchemaDAO.remove({ user: userId });
    // const sprints = pastSprintSchemaDAO.find({ user: userId });
    // console.log(sprints);
    return sprints;
  }
}

// Create the HeroRouter, and export its configured Express.Router
const pastSprintService = new PastSprintService();

export default pastSprintService;
