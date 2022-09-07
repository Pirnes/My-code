const mongoose = require('mongoose')

const tyreSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    require: true
  },
  author: {
    type: String,
    minlength: 3,
    require: true,
  },
  url: {
    type: String,
    minlength: 9,
    require: true,
    validate: {
      validator: function(v) {
        return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/.test(v)
      },
    },
  },
  likes: Number
})

tyreSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Tyre', tyreSchema)