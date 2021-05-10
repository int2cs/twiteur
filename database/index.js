const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    "mongodb://localhost:27017/twiteur?retryWrites=true?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
  )
  .then(() => console.log("Connexion ok !"))
  .catch((err) => console.log(err));
