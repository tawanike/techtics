import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true}
  slug: {type: String, required: true, unique: true}
  subtitle: String,
  teaser: String,
  body: String,
  created_at: Date,
  updated_at: Date,
  published: Boolean,
  tags: Array,
  author: {
    fname: {type: String, required: true},
    lname: {type: String, required: true},
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
    }
  },
  category: {
    title: {type: String, required: true}
    slug: {type: String, required: true, unique: true}
    subtitle: String,
    description: String,
    image: String,
  }
});

postSchema.pre('save', function(next){
  const currentDate = new Date();
  this.updated_at = currentDate;

  if(!this.created_at)
    this.created_at = currentDate;

  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
