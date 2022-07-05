const { Router } = require('express');
const { Type } = require('../db');
const router = Router();
const axios = require('axios');


router.get('/types', async (req, res) =>{

    try {
        const typesApi = await axios.get('https://pokeapi.co/api/v2/type');
        const typesPoke = await typesApi.data.results;
        typesPoke.forEach(type => {
            Type.findOrCreate({
                where: { name: type.name }
            })
        });
        const allTypes = await Type.findAll();
        res.send(allTypes);

    } catch (error) {
        console.log((error))
    }
       
})


module.exports = router;
