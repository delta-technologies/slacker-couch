const MongoClient = require('mongodb').MongoClient

// A function for connecting to MongoDB
async function connectToDatabase(uri, dbName) {
 
  // Create a new connection
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  // Select the database through the connection
  const db = await client.db(dbName);

  // Return the connection
  return db;
}

module.exports = { connectToDatabase };