import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import Api from './routes/api.routes';
import setup from './config/setup';
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    setup.configDefault();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(cors());
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  public authChecka() {
    return jwt({
      secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://sprints.auth0.com/.well-known/jwks.json'
      }),
      // This is the identifier we set when we created the API
      audience: 'https://sprints.auth0.com/api/v2/',
      issuer: 'https://sprints.auth0.com/', // e.g., you.auth0.com
      algorithms: ['RS256']
    });
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
    // this.express.use('/api', this.authChecka(), Api);
    this.express.use('/api', Api);
    // this.express.use('/api/v1/pastsprint', HeroRouter);
  }
}

export default new App().express;
