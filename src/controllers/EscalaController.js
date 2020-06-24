
const Escala = require('../models/Escala')

module.exports = {
    async index(request, response) {
        const matfunc  = request.headers.authorization;

        const escala = await Escala.find({ matescala: matfunc })
        
        return response.json(escala)
    }
}