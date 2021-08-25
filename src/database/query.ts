import { DbConnect } from "./connect";
const db = new DbConnect();

export class Query {

  private _query: string;
  private _columns: string | string[];
  private _table: string; // model maybe?
  private _where: string; // use it as a string[] too for multiple and / or?

  private _results: string | string[]; // query results

  constructor() {
    this._query = '';
    this._columns = '';
    this._table = '';
    this._where = '';
    this._results = '';
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
    })
  }

  /**
   * Select clause of the query.
   * Can be a unique string or an array of strings.
   * @param value 
   * @returns 
   */
  select(value: string | string[]) {
    // if(typeof value === "object") {
    //   for(let el in value) {
    //     this._where += el
    //     if(value.indexOf(el) !== -1) {
    //       this._where += ','
    //     }
    //   }
    // }
    this.reset();

    // this._where += value;
    this._query += `select ${value} `;
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

  where(where: string) {
    this._query += where;
    return this;
  }

  reset() {
    this._query = '';
  }

}