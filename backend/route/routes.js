let router = require('express').Router();

// Default API response
router.get('/', function(req, res) {
    res.json({
        status: 'OK',
        message: 'RickMortyApp API is up and running'
    });
});

// Controllers
var favController = require('../controller/favController');
var charController = require('../controller/charController');

// Routes
router.route('/fav')
    .get(favController.index)
    .post(favController.add);
router.route('/fav/:fav_id')
    .delete(favController.delete);
router.route('/character')
    .get(charController.index);

//Export API routes
module.exports = router;