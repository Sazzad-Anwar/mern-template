//@Description: All types of application route's configuration is set in this file
const express = require('express');
const router = express.Router();
const { home, login, protected } = require('../controllers/AppController');
const { tokenValidation } = require('../middlewares/jwt-middleware');

//@Description:
//ROUTE: /api/v1/home
//Access: user
router
    .route('/home')
    .post(home);


router
    .route('/login')
    .post(login)

router
    .route('/protected_route')
    .post(tokenValidation, protected)
    .get(tokenValidation, protected)

module.exports = router;