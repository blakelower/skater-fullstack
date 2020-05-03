const express = require('express');
const router = express.Router();
const usersRoute = require('./userRouter');

router.use('/user', usersRoute)

module.exports = router;