const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const mobiles = (req, res) => {
  const path = '/api/mobiles';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
        _renderHomepage(req, res, body);
    }
  )
};

const _renderHomepage = function(req, res, responseBody) {
  let message = null;
  if(!(responseBody instanceof Array)) {
      message = "API looup error.";
      responseBody = [];
  } 
  else {
      if(!responseBody.length) {
          message = "No Mobile found.";
      }
  }

  res.render('list-display', {
      Data : responseBody,
      title: "Mobile list",
      message: message
  });
};

const _renderDetailPage = (req, res, responseBody) => {
    res.render('mobile-info', {
        currentMobile: responseBody
    });
};

const mobileInfo = (req, res) => {
    const path = `/api/mobiles/${req.params.mobileid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    )
};


const _renderCreatepage = function(req, res) {
    res.render('create-new-mobile',{
        title: "Create New Mobile"
    });
};

const addNewMobile = function(req, res) {
    _renderCreatepage(req,res);
};

const doAddNewMobile = function(req,res){
    const path =  '/api/mobiles';
    const postdata = {
        img: req.body.img,
        name: req.body.name,
        rom: req.body.rom,
        ram: req.body.ram,
        os: req.body.os,
        colors: req.body.color,
        availablestock: req.body.stocks,
        price: req.body.price,
        ratings: req.body.rating,
        fCamResolution: req.body.fCamResolution,
        rCamResolution: req.body.rCamResolution,
        reviews: req.body.reviews
    };
    console.log(postdata);
    const requestOptions = {
      url: apiOptions.server + path,
      method: 'POST',
      json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201){
              res.redirect('/list');
            }
            else{
                console.log("nai aavto data");
            }
        }
    );
  };

const mobile =
    function (req, res, next) {
        res.render('display', { 
            title: ' New Launch',
            mobiledetail : {
                img: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/154/15447/15447452.jpg",
                name: "OnePlus 9 Pro",
                rom: "256GB",
                colors: [{
                    color : "Forest Green",
                    availablestock : 23,
                    price:"$1026.78"
                },
                {
                    color : "Black",
                    availablestock : 8,
                    price:"$1026.78"
                }],
                rating: 3,
                reviews: "89",
            }
        });
    };

module.exports={
    mobiles, mobile, mobileInfo,addNewMobile,doAddNewMobile
};