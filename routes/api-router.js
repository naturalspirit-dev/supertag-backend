const express =  require('express');
const router = express.Router();

router.use('/auth', require('./auth-router'));
router.use('/order', require('./order-router'));
router.use('/user', require('./user-router'));
module.exports = router;