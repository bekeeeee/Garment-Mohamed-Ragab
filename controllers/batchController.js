const Batch = require('./../models/batchModel')


exports.getAllBatches = async(req,res,next)=>{
    try{
        // I don't build any query based on task requirements
        const data = await Batch.find();
        res.status(200).json({
          status: 'success',
          data: {
            data
          }
        });
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
} ;

exports.createBatch = async(req,res,next)=>{
try{
    const data = await Batch.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data
      }
    });
}
catch(err){
    res.status(400).json({
        status:'fail',
        message:err
    })
}

} ;

