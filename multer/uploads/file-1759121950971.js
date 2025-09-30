const mongoose = require("mongoose");

mongoose.connect("mongodb url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const Songs = mongoose.model("Songs", songSchema);
console.log("Song model created successfully");


// to find the song from the database file
// Songs.find()
//   .then((allSongs) => {
//     console.log("All songs retrieved successfully:", allSongs);
//   })
//   .catch((error) => {
//     console.error("Error retrieving songs:", error);
//   });

//   Songs.find({ category: "Bollywood" })
//   .then((allSongs) => {
//     console.log("All songs retrieved successfully:", allSongs);
//   })
//   .catch((error) => {
//     console.error("Error retrieving songs:", error);
//   });

// //to create a new record
// const newSong = new Songs({
//   title: "Vandematram",
//   artist: "Arijit Singh",
//   category: "Patrotic",
//   album: "Patrotic",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2022,
// });

// newSong
//   .save()
//   .then(() => {
//     console.log("New song added successfully");
//   })
//   .catch((error) => {
//     console.error("Error adding new song:", error);
//   });