//@Description:Controller for main application
const asyncHandler = require('express-async-handler');
const { response, pagination, localTimeString } = require('../middlewares/middlewares');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { getToken, tokenValidation } = require('../middlewares/jwt-middleware');

let userDetails = {};

const home = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    userDetails._id = uuidv4();
    userDetails.name = name;
    userDetails.email = email;
    userDetails.password = hashedPass;



    let data = {
        userDetails
    }
    res.json(response(true, 200, "Success", data));
});

const login = async (req, res) => {
    const { email, password } = req.body;

    const isMatched = await bcrypt.compare(password, userDetails.password);
    console.log(isMatched);

    if (isMatched) {
        let token = await getToken(userDetails);
        res.json({ token })
    } else {
        res.json({ message: 'Login failed' })
    }
}

const protected = asyncHandler(async (req, res) => {
    console.log('hello');
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ message: 'Authentication Failed' });
    }
});

module.exports = {
    home, login, protected
}