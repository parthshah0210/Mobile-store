const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema(
    {
        color : { 
            type: String,
            required: true
        },
        availablestock : {
            type: Number,
            required: true
        },
        price: {
            type :String,
            required: true
        },
        img:{
            type:String,
            required:true
        }
    }
);

const mobileSchema = new mongoose.Schema(
    {
        img : {
            type: String,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        rom :{
            type: [String],
            required: true
        },
        ram :{
            type: [String],
            required: true
        },
        os :{
            type:String,
            required:true
        },
        fCamResolution:{
            type: String,
            required: true
        },
        rCamResolution:{
            type: String,
            required: true
        },
        colors : [colorSchema],
        rating : {
            type: Number,
            required: true,
            'default': 0,
            min: 0,
            max: 5
        },
        reviews : {
            type: String,
            required: true,
            'default' : "0"
        }
    }
);

mongoose.model("Mobile",mobileSchema);