const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        googleId: String,
        activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    }
)

module.exports = mongoose.model('Student', studentSchema);