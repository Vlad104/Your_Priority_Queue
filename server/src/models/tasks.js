const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueid = require('mongoose-uniqueid');

const TaskSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: false,
        required: true,
        auto: true,
    },
    text: String,
})

const TaskModel = mongoose.model('tasks', TaskSchema);

module.exports = TaskModel;