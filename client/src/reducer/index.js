const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
    loading: true
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                loading: false
            }

        case 'FILTER_BY_TYPES':
            const pokemonsTodos = state.allPokemons;
            console.log(pokemonsTodos)
            const typesFilter = action.payload  === 'all' ? state.allPokemons : state.allPokemons.filter(pok => pok.types.find(type => type[0] === action.payload));
            console.log(typesFilter)
            
            return{
                ...state,
                pokemons: typesFilter
            }
        
        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }
        
        case 'FILTER_CREATED':
            const todosPokemons = state.allPokemons;
            const createdFilter = action.payload === 'created' ? todosPokemons.filter(el => el.createdInDB) : todosPokemons.filter(el => !el.createdInDB)
            return{
                ...state,
                pokemons: action.payload === 'all' ? todosPokemons : createdFilter
            }

        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ?
            state.allPokemons.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1
                }
                return 0
            }):
            state.allPokemons.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                pokemons: sortedArr
            }

        case 'ORDER_BY_ATTACK':
            const array = action.payload === 'more' ?
            state.allPokemons.sort(function(a, b){
                if(a.attack > b.attack){
                    return 1
                }
                if(b.attack > a.attack){
                    return -1
                }
                return 0
            }):
            state.allPokemons.sort(function(a, b){
                if(a.attack > b.attack){
                    return -1
                }
                if(b.attack > a.attack){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                pokemons: array
            }

        case 'GET_NAME_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                loading: false
            }

        case 'POST_POKEMON':
            return{
                ...state
            }

        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }

        case 'DELETE_POKEMON':
            return{
                ...state
            }

        case 'CLEAN_DETAIL':
            return{
                ...state,
                detail: {}
            }

        case 'CLEAN_POKEMONS':
            return{
                ...state,
                loading: true
            }
        

            default: return state;
    }

}


export default rootReducer;