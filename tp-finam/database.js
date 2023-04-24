const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/tp";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
class Database {
  constructor() {
    this._connect();
  }
  async _connect() {
    try {
      await mongoose.connect(uri, options);
      console.log("Connected to MongoDB via Mongoose");
    } catch (err) {
      console.error("Error connecting to MongoDB via Mongoose", err);
    }
  }
}
// Export the singleton instance of the Database class
module.exports = new Database();
