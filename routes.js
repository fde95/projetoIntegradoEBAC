const express = require('express')

const routes = express.Router();

const PropertiesController = require('./controllers/PropertiesController')

// padão rest
routes.get('/properties', PropertiesController.read)
routes.post('/properties', PropertiesController.create)
routes.delete('/properties/:id', PropertiesController.delete)
routes.post('/properties/:id', PropertiesController.update)

routes.get('/', (request, response) => {
    return response.json({
        nome: "Felipe",
        sobrenome: "Espinoza"
    })
}) 

module.exports = routes