module.exports = {
  //
  // Database
  // DB name is defined in: ./config/default.js
  //
  database: {
    //
    // MySQL
    //
    // client: 'mysql',
    // connection: {
    //   host: 'localhost',
    //   port: 3306,
    //   user: 'root',
    //   password: ''
    // }

    //
    // MariaDB
    //
    // client: 'mariadb',     // or mariasql
    // connection: {
    //   host: 'localhost',
    //   port: 3306,
    //   user: 'root',
    //   password: ''
    // }

    //
    // Postgres
    //
    //  client: 'pg',
    //  connection: {
    //    host: 'localhost',
    //    port: 5432,
    //    user: 'cashvueuser',
    //    password: 'password'
    //  }

    //
    // SQLite3
    //
    // client: 'sqlite3',
    // connection: {
    //   filename: './my_SQLite3.db'
    // }
  },

  //
  // Logging
  //
  logging: {
    console: {
      level: 'debug'
    }
  }
}
