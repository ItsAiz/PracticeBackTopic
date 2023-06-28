const mongoose = require("mongoose")

const TopicSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    creationDate:{
        type: Date,
        required: true
    }
})

const Topic = mongoose.model('topics', TopicSchema);

module.exports = Topic;
