// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';

import sprintTemplateService from '../services/SprintTemplate.service';
// Creates and configures an ExpressJS web server.
class SprintTemplateController {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }

  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all sprints.
   */
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const pastTemplate = await sprintTemplateService.getTemplates();
      res.json({ pastTemplate });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   * Create all sprint.
   */
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const pastTemplate = await sprintTemplateService.create(req.body);
      res.json({ pastTemplate });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }

  /**
   * delete on sprint.
   */
  public async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const pastTemplate = await sprintTemplateService.delete(req.body);
      res.json({ pastTemplate });
    } catch (err) {
      res.json({
        status: 404
      });
      console.log(err);
    }
  }
}

// Create the Sprint router, and export its configured Express.Router
const sprintTemplateController = new SprintTemplateController();

export default sprintTemplateController;
