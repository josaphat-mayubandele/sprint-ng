// Export the express.Router() instance to be used by server.ts
import { Router, Request, Response, NextFunction } from 'express';
import sprintTemplateController from '../controllers/SprintTemplate.controller';
// const Heroes = require('../data');

export class PastTemplate {
  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.put('/create', sprintTemplateController.create);
    this.router.get('/get/', sprintTemplateController.getAll);
    this.router.delete('/delete/', sprintTemplateController.deleteOne);
  }
}

// Create the HeroRouter, and export its configured Express.Router
const pastTemplate = new PastTemplate();
pastTemplate.init();

export default pastTemplate.router;
