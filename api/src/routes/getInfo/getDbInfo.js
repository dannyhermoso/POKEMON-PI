const { Pokemon, Type } = require('../../db');


const getDbInfo = async () =>{
    try {

        const dbPokemons = await Pokemon.findAll({
            include:{
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })

        const pokeJSON = dbPokemons.map(pokemon => pokemon.toJSON());
        const pokeType = pokeJSON.map(pokemon =>{
            const typeName = pokemon.types.map(type=> [type.name]);
            return {...pokemon, types: typeName};
        })
        return pokeType;
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = getDbInfo;