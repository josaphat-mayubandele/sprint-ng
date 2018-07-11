// Export the express.Router() instance to be used by server.ts
import { Router, Request, Response, NextFunction } from 'express';
import sprintController from '../controllers/Sprint.controller';
// const Heroes = require('../data');

export class Pastsprint {
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
    this.router.put('/create/:userId', sprintController.create);
    this.router.get('/get/:userId', sprintController.getAll);
    this.router.delete('/delete/:userId', sprintController.deleteAll);
  }
}

// Create the HeroRouter, and export its configured Express.Router
const pastsprint = new Pastsprint();
pastsprint.init();

export default pastsprint.router;
