const mongoose = require('mongoose');
const mobile = mongoose.model('Mobile');

const getMobiles = function (req, res) {
  mobile.find().exec(function (err, mobiledata) {
    if (err) {
      res
        .status(404)
        .json(err);
      return;
    }
    else{
      res
        .status(200)
        .json(mobiledata);
    }
  });
};

const CreateMobile = function (req, res) {
  
  var colorarray = [], availablestock = [], price = [], img = [];
  colorarray = req.body.colors.split(",");
  availablestock = req.body.availablestock.split(",");
  price = req.body.price.split(",");
  img = req.body.img.split(",");
  let colorslist = [];
  let i= colorarray.length;
  while(i>0){
    let colordata = {
      color:'',
      availablestock: '',
      price: '',
      img: ''
    }
    if(colorarray[i-1]){
      colordata.color = colorarray[i-1];
    }
    if(price[i-1]){
      colordata.price = price[i-1];
    }
    if(availablestock[i-1]){
      colordata.availablestock = availablestock[i-1];
    }
    if(colorarray[i-1]){
      colordata.img = img[i-1];
    }
    colorslist.push(colordata);
    i=i-1;
  }

  mobile.create({
    img: img[0],
    name: req.body.name,
    rom: req.body.rom.split(","),
    ram: req.body.ram.split(","),
    os: req.body.os,
    colors: colorslist,
    rating: req.body.rating,
    fCamResolution: req.body.fCamResolution,
    rCamResolution: req.body.rCamResolution,
    reviews: req.body.reviews
  }, (err, mobiledata) => {
    if (err) {
        res
          .status(400)
          .json(err);
    } else {
        res
          .status(201)
          .json(mobiledata);
    }
});
};

const getSingleMobile = function (req, res) {
  mobile
    .findById(req.params.mobileid)
    .exec((err, mobile) => {
      res
      .status(200)
      .json(mobile);
    });
};

const updateMobile = function (req, res) {

  var colorarray = [], availablestock = [], price = [], img = [];
  colorarray = req.body.colors.split(",");
  availablestock = req.body.availablestock.split(",");
  price = req.body.price.split(",");
  img = req.body.img.split(",");

  if (!req.params.mobileid) {
    res
        .status(404)
        .json({
            "message": "Not found, mobileid is required"
        });
    return;
  }
  mobile.findById(req.params.mobileid)
    .exec((err, mobiledata) => {
      if (!mobiledata) {
        res
            .status(404)
            .json({
                "message": "mobileid not found"
            });
        return;
      } else if (err) {
        res
            .status(400)
            .json(err);
        return;
      }
      mobiledata.img = req.body.img;
      mobiledata.name = req.body.name;
      mobiledata.rom =req.body.rom.split(",")
      mobiledata.ram = req.body.ram.split(",")
      mobiledata.os = req.body.os;
      mobiledata.colors = [];

      let i= colorarray.length;
      while(i>0){
        let colordata = {
          color:'',
          availablestock: '',
          price: '',
          img: ''
        }
        if(colorarray[i-1]){
          colordata.color = colorarray[i-1];
        }
        if(price[i-1]){
          colordata.price = price[i-1];
        }
        if(availablestock[i-1]){
          colordata.availablestock = availablestock[i-1];
        }
        if(colorarray[i-1]){
          colordata.img = img[i-1];
        }
        mobiledata.colors.push(colordata);
        i=i-1;
      }
      mobiledata.rating = req.body.rating;
      mobiledata.fCamResolution = req.body.fCamResolution;
      mobiledata.rCamResolution = req.body.rCamResolution;
      mobiledata.reviews = req.body.reviews;

      mobiledata.save((err, mobiledata) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(mobiledata);
        }
      });
    }
  );
};

const deleteMobile = function (req, res) {
  const mobileid = req.params.mobileid;
    if (mobileid) {
      mobile
        .findByIdAndRemove(mobileid)
        .exec((err, mobiledata) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        });
    } else {
      res
        .status(404)
        .json({ "message": "No mobileid" });

    }
};

module.exports = {
    getMobiles,
    CreateMobile,
    getSingleMobile,
    updateMobile,
    deleteMobile
};