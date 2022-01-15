const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        googleId: String,
        activities: [{type: Schema.Types.ObjectId, ref: 'Event'}],
    }
)

module.exports = mongoose.model('Student', studentSchema);