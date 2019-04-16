const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'Todo field is required']
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
