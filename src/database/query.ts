import { DbConnect } from "./connect";
const db = new DbConnect();

interface Where extends Object {
  [key: string]: any
}

export class Query {

  private _query: string;

  constructor() {
    this._query = '';
  }

  /**
   * Executor for the query builder.
   * @returns the results array or an error.
   */
  execute() {
    return new Promise((resolve, reject) => {
      db.createPool().getConnection((error, conn) => {
        if (error) return console.log('Error...' + error);

        conn.query(this._query, (error, result) => {
          if (error) return console.log('Error...' + error);

          resolve(result);
        });
      });
    });
  }

  /**
   * Select clause of the query.
   * Can be a unique string or an array of strings.
   * Use all or * to select all columns.
   * @param value 
   * @returns 
   */
  select(value: string | string[]) {
    this.reset();

    if(value === '*' || value === 'all') {
      this._query += `select * `
    } else {
      this._query += `select ${value} `;
    }

    return this;
  }

  /**
   * Table to run the query against.
   * @param value 
   * @returns 
   */
  from(value: string) {
    this._query += `from ${value} `;
    return this;
  }

  /**
   * Object with the where clause, as {username: 'username'}.
   * Only one argument is passable with this object.
   * To pass more use andWhere or orWhere.
   * @param where 
   * @returns 
   */
  where(value: Where) {
    this._query += `where `
    for(let el in value) {
      this._query += `${el} = '${value[el]}' `
      break; // temp break to only use the 1st object.
    }
    return this;
  }

  andWhere(value: Where) {
    for(let el in value) {
      this._query += `and `
      this._query += `${el} = '${value[el]}' `
    }
    return this;
  }

  orWhere(value: Where) {
    for(let el in value) {
      this._query += `or `
      this._query += `${el} = '${value[el]}' `
    }
    return this;
  }

  reset() {
    this._query = '';
  }

}