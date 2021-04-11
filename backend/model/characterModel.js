const mongoose = require('mongoose');

//schema
var charSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fav: {
        type: Boolean,
        required: true
    },
});

// Export Char Model
var Char = module.exports = mongoose.model('char', charSchema);
module.exports.get = function (callback, limit) {
    Char.find(callback).limit(limit);
}