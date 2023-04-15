const pgp = require('pg-promise')();

//TO DO: change out for actual database
// Creates a new PostgreSQL database connection
const db = pgp('postgres://username:password@localhost:5432/mydatabase');

// Define the schema creation query
const createSchemaQuery = `CREATE SCHEMA [IF NOT EXISTS] kafkAlertsSchema;`;

// Run the schema creation query
db.none(createSchemaQuery)
  .then(() => console.log('Schema created successfully'))
  .catch((err) => console.error('Error creating schema:', err));

//TO DO: make table for users
const makeUserTable = `CREATE TABLE [IF NOT EXISTS] user_table (
    column1 datatype(length) column_contraint,
    column2 datatype(length) column_contraint,
    table_constraints
 )`;

module.exports = db;
