const { Router } = require('express');
const router = Router();
const { Pokemon, Type } = require('../db');
const { getAllInfo } = require('./getInfo/getAllInfo');



router.get('/pokemons', async (req, res) =>{
    const name = req.query.name;
    const totalPokemon = await getAllInfo();

    try{
    if(name){
        const pokemonName = totalPokemon.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        pokemonName.length ?
        res.status(200).send(pokemonName):
        res.status(404).send('No conseguimos a tu pokémon D:')
    }
    else{
        res.status(200).send(totalPokemon)
    }
    }
    catch(error){
        console.log(error)
    }
})

router.post('/pokemons', async (req, res) =>{
    const{
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        types,
        createInDB
    } = req.body;
    try{
    const pokemonCreated = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        createInDB
    })

    const typeDb = await Type.findAll({
        where: { name: types}
    })

    pokemonCreated.addType(typeDb);
    res.send('Tu pokemon se ha guardado en tu pokebola')
    }
    catch(error){
        console.log(error);
    }

})

router.get('/pokemons/:id', async (req, res) => {
    const {id} = req.params;
    try{
    const pokemonTotal = await getAllInfo();
    if(id){
        const pokemonId = await pokemonTotal.filter((el) => el.id == id);
        pokemonId.length ?
        res.status(200).send(pokemonId) :
        res.status(404).send('I can not found that pokemon :((')
    }
    }
    catch(error){
        console.log(error);
    }
})

router.delete('/delete/:id', async(req,res) => {
    const { id } = req.params;
    try {
        if (id) {
           await Pokemon.destroy({
                where: { id: id }
            });
            return res.send({ msg: 'Pokemon deleted' })
        }
    } catch (error) {
        console.log(error);
    }
})

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    try{
        if(id){
            const{ name, img, createInDB, hp, attack, defense, speed, weight, height, types } = req.body;
            await Pokemon.update(
                { name, img, createInDB, hp, attack, defense, speed, weight, height, types },
                { where: 
                    { id: id }
                }
            )
            res.send('Pokemon updated succesfully!')
        }
    }
    catch(error){
        console.log(error)
    }
})


module.exports = router;