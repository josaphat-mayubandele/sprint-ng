import { connect } from 'mongoose';
/*
*   Database connection to mongoDB
*/

const db = {
  ADDRESS: 'localhost',
  PORT: 27017,
  NAME: 'sprints_ng_josaphat'
};

export class DBConfig {
  static connectMongoDB() {
    connect(
      `mongodb://${db.ADDRESS}/${db.NAME}`,
      err => {
        if (err) {
          console.log('Faied to connect to DB');
        }
        console.log('Successfully connected to MongoDB');
      }
    );
  }
}
