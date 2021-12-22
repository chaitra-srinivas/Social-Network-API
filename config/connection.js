const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/socialNetworkDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// The default connection
//const db = connect.connection;

//Bind connection to error event
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;
