const { AirplaneService } = require('../services')
const { StatusCodes } = require('http-status-codes');
/**
 * POST : /airplanes 
 * req-body {modelNumber:'airbus390',capacity:300} 
 */
async function createAirplane(req, res) {
    try {
        console.log(req.body)
        const airplanes = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully create the airplane",
            data:airplanes,
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'Something went wrong while creating the airplane',
            data:{},
            error:error
        });
    }
}
module.exports={
    createAirplane 
}