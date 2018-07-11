import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import App from './back-end/app';
// Import WelcomeController from controllers entry point
// Import database configuration
import { DBConfig } from './back-end/config/db.config';

const port = process.env.PORT || 3000;
// Serve the application at the given port
App.listen(port, () => {
  // Success callback
  DBConfig.connectMongoDB();
  console.log(`Listening at http://localhost:${port}/`);
});

/*
// -------------------------------------------------
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port1 = process.env.PORT || 3000;
//  body parsing middleware
app.use(bodyParser.json());
// Mount the WelcomeController at the /welcome route
app.use('/', PastsprintController);

// use logger middlware
app.use(logger('dev'));

// use json form parser middlware
app.use(bodyParser.json());

// use query string parser middlware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// use cookie parser middleware
app.use(cookieParser('SECRET_GOES_HERE'));

// Serve the application at the given port
app.listen(port1, () => {
  // Success callback
  DBConfig.connectMongoDB();
  console.log(`Listening at http://localhost:${port1}/`);
});
*/
