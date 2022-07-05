import axios from 'axios';

export function getPokemons() {
    return async function(dispatch) {
        var json = await axios.get("/pokemons");
        console.log(json);
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}

export function filterPokemonsByType(payload){
    console.log(payload)
    return{
        type: 'FILTER_BY_TYPES',
        payload
    }
}

export function getTypes(){
    return async function(dispatch){
        try{
        var json = await axios.get('/types')
        
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })}
        catch(error){
            console.log(error)
        }
    }
}

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    console.log(payload)
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByAttack(payload){
    console.log(payload)
    return{
        type: 'ORDER_BY_ATTACK',
        payload
    }
}

export function getNamePokemon(payload){
    return async function(dispatch){
        try {
            var json = await axios.get(`/pokemons?name=${payload}`);
            return dispatch({
                type: 'GET_NAME_POKEMONS',
                payload: json.data
            })
        } catch (error) {
            
        }
    }
}

export function postPokemon(payload){
    return async function(dispatch){
        var json = await axios.post('/pokemons', payload)
        console.log(json)
        return json;
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`/pokemons/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function deletePokemon(id){
    return async function(dispatch){
        try{
            var json = await axios.delete(`/delete/${id}`)
            return dispatch({
                type: 'DELETE_POKEMON',
                payload: json.data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

export function updatePokemon(id, payload){
    return async function(dispatch){
        try {
            var json = await axios.put(`/update/${id}`, payload)
            return dispatch({
                type: 'UPDATE_POKEMON',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function cleanDetail(){
    return{
        type:'CLEAN_DETAIL',
        payload: {}
    }
}

export function cleanPokemons(){
    return{
        type: 'CLEAN_POKEMONS',
        payload: {}
    }
}
