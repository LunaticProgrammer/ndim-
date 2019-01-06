const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventname: {

        type : String,
        required : true
  },
  eventdetails: {

        required : true,
        type : String
  },

  category : {

    required : true,
    type : String
  },

  eventcode : {

    required: true,
    unique : true,
    type : String
  },

  date : {

    required : true,
    type : Date
  },

  Remarks : {

    type : String,
    required : true
  }

});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;