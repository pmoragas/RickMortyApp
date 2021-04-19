require('dotenv').config();
const router = require('express').Router();
const UserMiddleware = require("../middleware/User.js");

// Default API response
router.get('/', function(req, res) {
    res.json({
        status: 'OK',
        message: 'RickMortyApp API is up and running'
    });
});

const favController = require('../controller/favController');
const charController = require('../controller/charController');
const userController = require('../controller/userController');

router.route('/fav')
    .get(UserMiddleware.isValidUser, favController.index)
    .post(UserMiddleware.isValidUser, favController.add);
router.route('/fav/:fav_id')
    .delete(UserMiddleware.isValidUser, favController.delete);
router.route('/character')
    .get(UserMiddleware.isValidUser, charController.index);
router.route('/character/:char_id')
    .get(UserMiddleware.isValidUser, charController.find);
router.route('/user/signin')
    .post(userController.signin);
router.route('/user/register')
    .post(userController.register);


module.exports = router;