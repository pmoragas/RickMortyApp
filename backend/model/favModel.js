const mongoose = require('mongoose');

//schema
var favSchema = mongoose.Schema({
    char_id: {
        type: Number,
        required: true
    },
    fav: {
        type: Boolean,
        required: true
    },
});

// Export Char Model
var Fav = module.exports = mongoose.model('fav', favSchema);
module.exports.get = function (callback, limit) {
    Fav.find(callback).limit(limit);
}