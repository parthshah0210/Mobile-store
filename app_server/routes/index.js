var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/home");
var ctrlAbout = require("../controllers/about");
var ctrlMobile = require("../controllers/mobile");

/* GET home page. */
router.get('/',ctrlHome.index);
router.get('/about', ctrlAbout.aboutus);
router.get('/list', ctrlMobile.mobiles);
router.get('/mobile-info/:mobileid', ctrlMobile.mobileInfo);
router.get('/display', ctrlMobile.mobile);
router.route('/new')
      .get(ctrlMobile.addNewMobile)
      .post(ctrlMobile.doAddNewMobile);

module.exports = router;
