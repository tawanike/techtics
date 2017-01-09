import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  images: {
    profile: String,
    cover: String
  },
  about: String,
  social: {
    facebook: String,
    twitter: String,
    github: String,
  },
  company: {
    name: String,
    website: String,
    description: String,
    techStack: Array,
  },
  admin: Boolean,
});

//userSchema.pre('save', availability)

const User = mongoose.model('User', userSchema);

module.exports = User;
