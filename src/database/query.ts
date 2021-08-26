import {DbConnect} from "./connect";

const db = new DbConnect();

interface Values extends Object {
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
    console.log(this._query)
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
   * Insert clause for the query builder.
   * @param table
   */
  insert(table: string) {
    this._query += `insert into ${table} `;
    return this;
  }

  /**
   * This will set the values to be inserted. It is a bit hacky though. The developer needs to
   * pass two arrays as parameters.
   * TODO: change this to an 'key: value' js object.
   * @param columns
   * @param values
   */
  values(columns: string[], values: string[]) {
    this._query += `(${columns}) values(`;
    for (let value in values) {
      this._query += `'${values[value]}'`;
      if (parseInt(value) !== values.length - 1) {
        this._query += `,`;
      }
    }
    this._query += `)`;
    return this;
  }

  /**
   * Select clause of the query.
   * Can be a unique string or an array of strings.
   * Use all or * to select all columns.
   * @returns
   * @param columns
   */
  select(columns: string | string[]) {
    this.reset(); // temp solution to reset the query.

    if (columns === '*' || columns === 'all') {
      this._query += `select * `
    } else {
      this._query += `select ${columns} `;
    }

    return this;
  }

  /**
   * Table to run the query against.
   * @param table
   * @returns
   */
  from(table: string) {
    this._query += `from ${table} `;
    return this;
  }

  /**
   * Object with the where clause, as {username: 'username'}.
   * Only one argument is passable with this object.
   * To pass more use andWhere or orWhere.
   * @param where
   * @returns
   */
  where(where: Values) {
    this._query += `where `
    for (let el in where) {
      this._query += `${el} = '${where[el]}' `
      break; // temp break to only use the 1st object.
    }
    return this;
  }

  /**
   * 'and where =' clause for queries.
   * @param where
   * @returns
   */
  andWhere(where: Values) {
    for (let el in where) {
      this._query += `and `
      this._query += `${el} = '${where[el]}' `
    }
    return this;
  }

  /**
   * 'or where =' clause for queries.
   * @param where
   * @returns
   */
  orWhere(where: Values) {
    for (let el in where) {
      this._query += `or `
      this._query += `${el} = '${where[el]}' `
    }
    return this;
  }

  /**
   * The queries persist if the file is not reloaded so I need a helper function.
   */
  reset() {
    this._query = '';
  }

}