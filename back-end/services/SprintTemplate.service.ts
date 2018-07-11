// Import only what we need from express
import { Router, Request, Response, NextFunction } from 'express';
import pastTemplateSchemaDAO from '../daos/sprint-Template.dao';

// Assign router to the express.Router() instance
const router: Router = Router();

// is mounted on in the server.ts file.
// Creates and configures an ExpressJS web server.
class SprintTemplateService {
  // Run configuration methods on the Express instance.
  constructor() {
    this.middleware();
  }
  // Configure Express middleware.
  private middleware(): void {}

  /**
   * GET all element.
   */

  public async getTemplates() {
    console.log('service getTemplates');
    const Templates = await pastTemplateSchemaDAO.find();
    return Templates;
  }

  /**
   * CREATE element.
   */
  public create(template) {
    const pastTemplateCreated = pastTemplateSchemaDAO.create(template);
    return;
  }

  /**
   * Delete all element.
   */
  public async delete(template) {
    const Templates = await pastTemplateSchemaDAO.remove({ name: template });
    return;
  }
}

// Create the template router, and export its configured Express.Router
const sprintTemplateService = new SprintTemplateService();

export default sprintTemplateService;
