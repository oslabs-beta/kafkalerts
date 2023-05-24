// const { Pool } = require('pg');
// const dotenv = require('dotenv').config()
// console.log('pg file ran')
// const connectionString = process.env.PG_URI;
// const pool = new Pool({
//   connectionString,
// });

// pool.connect();

// // Define the schema creation query
// const createSchemaQuery = `CREATE SCHEMA IF NOT EXISTS kafkalerts_schema`;

// // Run the schema creation query. (none is for a query that expects no response)
// async function createSchema() {
//   await pool.query(createSchemaQuery)
//   .then(() => console.log('Schema created successfully'))
//   .catch((err) => console.error('Error creating schema:', err));
// }

// //TO DO: make table for users
// const makeUserTable = `CREATE TABLE IF NOT EXISTS users (
//     username VARCHAR(24) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     broker_ids text[],
//     PRIMARY KEY (username)
//  )`;

// async function createUserTable() {
//   await pool.query(makeUserTable)
//   .then(() => console.log('Table created successfully'))
//   .catch((err) => console.error('Error creating users table:', err));
// }

// createSchema();
// createUserTable();

// module.exports = {
//   query: (text, params, callback) => {
//     // console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };
