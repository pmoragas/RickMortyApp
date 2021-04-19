const mongoose = require('mongoose');

var favSchema = mongoose.Schema({
    char_id: {
        type: Number,
        required: true
    },
    fav: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
});

var Fav = module.exports = mongoose.model('fav', favSchema);

module.exports.get = function (callback, user_id) {
    Fav.find(callback).where('user_id').equals(user_id);
}