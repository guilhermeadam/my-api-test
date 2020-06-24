
const Funcionarios = require('../models/User')

module.exports = {
    async index(request, response) {
        const { chapafunc, anofunc } = request.body;

        const func = await Funcionarios.find({ chapafunc: chapafunc , anofunc: anofunc })

        if(func.length < 1) {
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }
        return response.json(func)
    }
}