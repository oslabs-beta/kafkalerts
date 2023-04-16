// const { Pool } = require('pg');


// create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI
// });

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };


/// start






// const pgp = require('pg-promise')();

// // Create a new PostgreSQL database connection
// const db = pgp('postgres://username:password@localhost:5432/mydatabase');

// Define the schema creation query
// const createSchemaQuery = `
//   CREATE SCHEMA myschema;
// `;

// // Run the schema creation query
// db.none(createSchemaQuery)
//   .then(() => {
//     console.log('Schema created successfully');
//   })
//   .catch(error => {
//     console.error('Error creating schema:', error);
//   })
//   .finally(() => {
//     // Close the database connection
//     pgp.end();
//   });

//   const makeUserTable = `CREATE TABLE [IF NOT EXISTS] table_name (
//     column1 datatype(length) column_contraint,
//     column2 datatype(length) column_contraint,
//     column3 datatype(length) column_contraint,
//     table_constraints
//  )`;


// // Define the user data to be inserted
//   const userData = {
//     username: 'john',
//     email: 'john@example.com'
//   };
  
//   // Define the schema and table names
//   const schemaName = 'myschema';
//   const tableName = 'users';
  
//   // Define the query to insert user data into the schema
//   const insertUserQuery = `
//     INSERT INTO ${schemaName}.${tableName} (username, email)
//     VALUES ($1, $2);
//   `;
  
//   // Run the query to insert user data into the schema
//   db.none(insertUserQuery, [userData.username, userData.email])
//     .then(() => {
//       console.log('User added to schema successfully');
//     })
//     .catch(error => {
//       console.error('Error adding user to schema:', error);
//     })
//     .finally(() => {
//       // Close the database connection
//       pgp.end();
//     });