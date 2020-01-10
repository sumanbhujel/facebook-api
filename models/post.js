const mongoose = require('mongoose')
const Post = mongoose.model('Post', {    

    status: {
        type: String,
        required:true,
        trim: true
    },
    image: {
        type: String,
        required:true,
        trim: true
    }  
  })

  module.exports = Post