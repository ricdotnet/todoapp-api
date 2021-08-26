import mysql, {Pool} from 'mysql';

import config from '../config';

export default class DatabaseConnect {

  private host: string = config.database.host;
  private port: number = 3306;
  private timeout: number = 5000;

  private user: string = config.database.user;
  private password: string = config.database.password;
  private database: string = config.database.db;

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
    this.createPool().getConnection((err, conn) => {
      if (err) {
        console.log('Could not connect.');
        return;
      }

      return conn;
    });
  }

}