/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';

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
import pastSprintService from '../services/PastSprint.service';
// Creates and configures an ExpressJS web server.
class PastsprintController {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }

  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all Heroes.
   */
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      // const userId = req.params.user;
      const pastsprint = await pastSprintService.getSprints(`${userId}`);
      res.json({ pastsprint });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   * GET all Heroes.
   */
  public create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const pastsprint = pastSprintService.create(req.body);
      res.json({ pastsprint });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   * GET all Heroes.
   */
  public deleteAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      console.log(userId);
      const pastsprint = pastSprintService.deleteAll(`${userId}`);
      // res.json(pastsprint);
      res.send(pastsprint);
      // res.send("fini");
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }
}

// Create the HeroRouter, and export its configured Express.Router
const pastSprintController = new PastsprintController();

export default pastSprintController;
