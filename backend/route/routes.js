let router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../model/userModel');
const UserMiddleware = require("../middleware/User.js");

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


const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

const schemaRegister = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

// Routes
router.post('/user/signin', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

    // create token
    const token = jwt.sign({
        email: user.email,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        token
    })
})

router.post('/user/register', async (req, res) => {
    // validate user
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json(
            {error: 'Email ya registrado'}
        )
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: password,
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
});

router.route('/fav')
    .get(UserMiddleware.isValidUser, favController.index)
    .post(UserMiddleware.isValidUser, favController.add);
router.route('/fav/:fav_id')
    .delete(UserMiddleware.isValidUser, favController.delete);
router.route('/character')
    .get(UserMiddleware.isValidUser, charController.index);
router.route('/character/:char_id')
    .get(UserMiddleware.isValidUser, charController.one);

//Export API routes
module.exports = router;