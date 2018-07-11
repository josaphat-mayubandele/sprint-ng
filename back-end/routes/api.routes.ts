import * as express from 'express';
import pastsprint from './PastSprint.route';
import pastTemplate from './SprintTemplate.route';
// Creates and configures an ExpressJS web server.
class Api {
  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.routes();
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
    const router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
    this.express.use('/v1/pastsprint', pastsprint);
    this.express.use('/v1/pastTemplate', pastTemplate);
  }
}

export default new Api().express;
