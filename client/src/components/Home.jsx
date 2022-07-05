import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, filterPokemonsByType, getTypes, filterCreated, orderByName, orderByAttack, cleanPokemons } from "../actions"
import { Link } from "react-router-dom"
import Card from "./Card"
import Paginado from "./Paginado"
import SearchBar from "./SearchBar"
import styles from "./Home.module.css"
import pokemonLogo from "../assets/images/pokemonLogo.png"
import Loader from './Loader'

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector ((state) => state.pokemons);
    const allPokemonsTypes = useSelector ((state) => state.types);


    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const [order, setOrder] = useState('');

    //LOADER
    const load = useSelector((state) => state.loading)


    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect (()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch])

    
    function handleClick(e){
        e.preventDefault();
        dispatch(cleanPokemons());
        dispatch(getPokemons());
        setCurrentPage(1);
    }

    function handleFilterTypes(e){
        dispatch(filterPokemonsByType(e.target.value));
        setCurrentPage(1);
        e.preventDefault();
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
        e.preventDefault()
    }

    function handleFilterByName(e){
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        e.preventDefault()
        setOrder(e.target.value)
    }

    function handleFilterByAttack(e){
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        e.preventDefault()
        setOrder(e.target.value)
    }

    return(
        
        <div>
        
        {load ? <Loader />:
        <div className={styles.general}>

        <header className={styles.header}>
            <SearchBar />
            
            <img src={pokemonLogo} className={styles.pokemonLogo}/>

            <Link to='/pokemons' className={styles.createPokemon}>Create pokemon</Link>
        </header>
            

            
            
            
            
                    
            <div className={styles.container}>
            <nav className={styles.navBar}>

            
            <button onClick={e => {handleClick(e)}} className={styles.recargar}>Reload all pokemons</button>
            

                <select onChange={(e) => handleFilterByName(e)} className={styles.boton}>
                    <option value=''>Name</option>
                    <option value='asc' >A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                <select onChange={e => handleFilterByAttack(e)} className={styles.boton}>
                    <option value=''>Attack</option>
                    <option value='less'>+ Attack</option>
                    <option value='more'>- Attack</option>
                </select>
                <select onChange={e => handleFilterCreated(e)} className={styles.boton}>
                    <option value=''>Origin</option>
                    <option value='all'>All</option>
                    <option value='api'>Api</option>
                    <option value='created'>Database</option>
                </select>
                <select  onChange={e => handleFilterTypes(e)} className={styles.boton}>
                    <option value=''>Types</option>
                    <option value='all'>All types</option>
                    {allPokemonsTypes?.map((e) => (
                        <option value={e.name} key={e.name}>{e.name}</option>
                    ))}
                </select>

                </nav>
                <div className={styles.clearFix}></div>
                <Paginado
                pokemonPerPage={pokemonPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}

                />
            
            {
                currentPokemons.length && currentPokemons?.map(el => {
                    return(
                        <div key={el.id}>
                    <Link to={'/detail/' + el.id} key={el.id}>
                        <Card name={el.name} image={el.img} type={el.types} />
                    </Link>
                    </div>
                    )
                    
                })
            }

            </div>
        </div>}
        </div>
    )
}