// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';

import sprintService from '../services/Sprint.service';
// Creates and configures an ExpressJS web server.
class SprintController {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }

  // Configure Express middleware.
  private middleware(): void {}

  /**
   * getAll all Sprint.
   */
  public async getAll(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      // const userId = req.params.user;
      const pastsprint = await sprintService.getSprints(`${userId}`);
      // const jsonContent = await JSON.parse(pastsprint);
      res.send(pastsprint);
      // res.json({ jsonContent });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   *
   * create all Sprint.
   *
   * @param req requete
   * @param res reponse
   * @param next
   */
  public create(req: Request, res: Response) {
    try {
      console.log(req.body);

      const pastsprint = sprintService.create(req.body);
      res.send(pastsprint);
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   * deleted all Sprint.
   */
  public deleteAll(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      console.log(userId);
      const pastsprint = sprintService.deleteAll(`${userId}`);
      console.log('delete all sprint run');
      res.json({ status: 200 });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }
}

// Create the sprint, and export its configured Express.Router
const sprintController = new SprintController();

export default sprintController;
