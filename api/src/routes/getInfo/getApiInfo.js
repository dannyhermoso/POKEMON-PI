const axios = require('axios');
//Hacemos el llamado general a la API

const getApiInfo = async () => {
    try{
        const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon') 
        const apiUrlRest = await axios.get(apiUrl.data.next);
        const apiUrlRest2 = await axios.get(apiUrlRest.data.next);
        const allPokemons = apiUrl.data.results.concat(apiUrlRest.data.results).concat(apiUrlRest2.data.results)

        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
            }

        const apiInfo = await Promise.all(
         allPokemons.map(async el => {
            const pokemon = await axios.get(el.url);
            return{
                id: pokemon.data.id,
                name: capitalizeFirstLetter(pokemon.data.name),
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height * 10, //PASAR A CENTIMETROS
                weight: pokemon.data.weight / 10, //PASAR A KG
                img: pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                //img: pokemon.data.sprites.other.dream_world.front_default,
                types: pokemon.data.types.map(el => [el.type.name])
            }
        })
        )

        return apiInfo;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = getApiInfo;