const pgp = require("pg-promise");

class Connection {
  constructor() {
    this.connection = pgp()(
      "postgres://postgres:postgres@localhost:5432/aprenda-programar"
    );
  }

  query(statement, params) {
    return this.connection.query(statement, params);
  }
}

module.exports = Connection;
