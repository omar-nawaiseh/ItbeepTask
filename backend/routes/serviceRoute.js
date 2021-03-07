const express = require('express');
const sendEmail = require('../controllers/servicesController');

const router = express.Router();

router.post('/email', sendEmail);

export default router;
