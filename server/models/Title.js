const mongoose = require('mongoose');

const { Schema } = mongoose;

const titleSchema = new Schema({
  Awards: Array,
  Genres: Array,
  OtherNames: Array,
  Participants: Array,
  ReleaseYear: Number,
  Storylines: Array,
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String
}, { collection: 'Titles' });

module.exports = mongoose.model('Title', titleSchema);
