// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';
import sprintSchemaDAO from '../daos/sprint.dao';

// Assign router to the express.Router() instance
// Creates and configures an ExpressJS web server.
class SprintService {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }
  pastSprintCreated;
  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all Sprints.
   */

  public async getSprints(userId) {
    console.log('service ' + userId);
    const sprints = await sprintSchemaDAO.find({ user: userId });
    return sprints;
  }

  /**
   * create  Sprint.
   */
  public async create(sprint) {
    this.pastSprintCreated = await sprintSchemaDAO.create(sprint);
    // console.log(this.pastSprintCreated);
    return this.pastSprintCreated;
  }

  /**
   * Delete all Sprints.
   */
  public async deleteAll(userId) {
    console.log('delete ' + userId);
    // userId = 'auth0|5b42f036a177ac1965fba39a';
    const sprints = await sprintSchemaDAO.remove({ user: userId });
    // const sprints = sprintSchemaDAO.find({ user: userId });
    // console.log(sprints);
    return sprints;
  }
}

// Create the Sprint router, and export its configured Express.Router
const sprintService = new SprintService();

export default sprintService;
