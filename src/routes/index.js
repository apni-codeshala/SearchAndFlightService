const express = require('express');
const router = express.Router();

const v1ApRoutes = require('./v1/index');

router.use('/v1', v1ApRoutes);

module.exports = router;