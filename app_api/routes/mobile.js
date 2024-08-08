const express = require('express');
const router = express.Router();
const ctrlMobile = require('../controllers/mobile');

router
    .route('/mobiles')
    .get(ctrlMobile.getMobiles)
    .post(ctrlMobile.CreateMobile);

router
    .route('/mobiles/:mobileid')
    .get(ctrlMobile.getSingleMobile)
    .put(ctrlMobile.updateMobile)
    .delete(ctrlMobile.deleteMobile);

module.exports = router;