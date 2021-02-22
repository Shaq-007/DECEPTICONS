const {Router} = require('express');
const express = require('express');
const router = express.Router();

const { signup, signin , changePassword, logout } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

router.patch('/resetPassword', changePassword)

module.exports = router;

