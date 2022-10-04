export class DatabaseConnectionError extends Error {
  reason = 'Error creating database connection';
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
