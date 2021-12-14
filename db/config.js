const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.mha7q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Attempt to connect to database
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (err) => {
    if (err) {
      console.log('Connection to MongoDB failed: ' + JSON.stringify(err, undefined, 2));
      return;
    }

    // Successful
    console.log('Successfully connected to MongoDb .....');
  }
);

module.exports = mongoose;
