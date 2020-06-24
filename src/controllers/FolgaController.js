
const Folga = require('../models/Folga')

module.exports = {
    async index(request, response) {
        const matfunc  = request.headers.authorization;

        const func = await Folga.find({ chapa: matfunc })
        console.log(matfunc)
        
        return response.json(func)
    }
}