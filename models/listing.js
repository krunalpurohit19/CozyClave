const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,

    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/a-winding-road-in-the-middle-of-a-forest-Usy12zpjZ5Y",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/a-winding-road-in-the-middle-of-a-forest-Usy12zpjZ5Y"
          : v,
    }
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
