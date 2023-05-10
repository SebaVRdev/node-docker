/* Configuracion de las rutas */
const { Router } = require('express');

const router = Router();


router.get('/', (req, res) => {
    res.json({message: "API - GET"})
})

module.exports = router;