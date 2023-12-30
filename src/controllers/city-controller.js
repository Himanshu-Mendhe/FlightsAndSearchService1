const { CityService } = require ('../services/index') 

const cityService = new CityService();

//POST -> 
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json ({
            data : city,
            success : true,
            message :'successfully craeted a city',
            errr : {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to craete a city',
            err : error
        })
    }
}
// in REST convention  DELETE -> /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json ({
            data : response,
            success : true,
            message :'successful deleted a city',
            errr : {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to delete the  city',
            err : error
        })
    }
}
// GET-> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json ({
            data : response,
            success : true,
            message :'successfully fetched  a city',
            errr : {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to get the city',
            err : error
        })
    }
}
// PATCH -> /city/:id -> req.body
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json ({
            data : response,
            success : true,
            message :'successfully updated  a city',
            errr : {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to update the city',
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
};