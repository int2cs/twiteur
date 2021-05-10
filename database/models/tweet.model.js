const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxLength: [140, "Tweet trop long"],
    minLength: [1, "tweet trop court"],
    required: [true, "champ requis !"],
  },
});

const Tweet = mongoose.model("tweet", tweetSchema);
module.exports = Tweet;
