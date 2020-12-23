const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema(
    {
        color:{
            type:String,
            required:[true,'A batch must have a color'],
            enum:{
                values:['red','blue','black','green'],
                message:'Color is either: red, blue, black, green'
            }
        },
        size:{
            type:String,
            required:[true,'A batch must have a size'],
            enum:{
                values:['S','M','L','XL'],
                message:'Size is either: S, M, L, XL'
            }
        },
        quantity:{
            type:Number,
            required:[true,'A batch must have a quantity'],
            min:[1,'Quantity must be greater than 0']
        }

    });

    const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
    