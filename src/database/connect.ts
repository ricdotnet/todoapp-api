import mysql, { Connection, Pool } from 'mysql';

import dotenv from 'dotenv';
dotenv.config();

export class DbConnect {

  private host: string = <string>process.env.DB_HOST;
  private port: number = 3306;
  private timeout: number = 5000;

  private user: string = <string>process.env.DB_USER;
  private password: string = <string>process.env.DB_PASSWORD;
  private database: string = <string>process.env.DB_DATABASE;

  createPool(): Pool {
    return mysql.createPool({
      host: this.host,
      port: this.port,
      timeout: this.timeout,
      user: this.user,
      password: this.password,
      database: this.database
    });
  }

  async getConnection() {
    // return new Promise((resolve, reject) => {
      this.createPool().getConnection((err, conn) => {
        if (err) {
          console.log('Could not connect.');
          return;
        }

        // resolve(conn);
        return conn;
      });
    // })
  }

}