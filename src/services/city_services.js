const { CityRepository } = require ('../repostory/index.js') 
// for now only cityrepository because we have just saved that file only and in future we will add more by comma

class cityServies {
    constructor () {
        this.cityRepository = new CityRepository();
    }
    async createCity (data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch (error){
            console.log("seomthing went wrong in the services layer")
            throw {error}
        }
    }

    async deleteCity (cityId) {
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }catch (error){
            console.log("seomthing went wrong in the services layer")
            throw {error}
        }
    }

    async getCity (cityId) {
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch (error){
            console.log("seomthing went wrong in the services layer")
            throw {error}
        }
    }

    async updateCity (cityId){
        try{
            const city = await this.cityRepository.updateCity(cityId);
        }catch (error){
            console.log("seomthing went wrong in the services layer")
            throw {error}
        }
    }
}