import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, deletePokemon, cleanDetail, cleanPokemons } from '../actions'
import { useEffect } from 'react'
import bug from '../assets/images/bug.png'
import dark from '../assets/images/dark.png'
import dragon from '../assets/images/dragon.png'
import electric from '../assets/images/electric.png'
import fairy from '../assets/images/fairy.png'
import fighting from '../assets/images/fighting.png'
import fire from '../assets/images/fire.png'
import flying from '../assets/images/flying.png'
import ghost from '../assets/images/ghost.png'
import grass from '../assets/images/grass.png'
import ground from '../assets/images/ground.png'
import ice from '../assets/images/ice.png'
import normal from '../assets/images/normal.png'
import poison from '../assets/images/poison.png'
import psychic from '../assets/images/psychic.png'
import rock from '../assets/images/rock.png'
import shadow from '../assets/images/shadow.jpg'
import steel from '../assets/images/steel.png'
import unknown from '../assets/images/unknown.png'
import water from '../assets/images/water.png'
import styles from './Detail.module.css'
import Loader from './Loader'

export default function Detail(props){
    const dispatch = useDispatch()
    const pokemonId = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        
        dispatch(getDetail(pokemonId.id))
        
    }, [dispatch])


    const myPokemon = useSelector((state) => state.detail)
    const load = useSelector((state) => state.loading)
    
    console.log(pokemonId.id)

    function getLogoType(type){
        switch(type){
            case 'bug':
                return bug;
            case 'dark':
                return dark;
            case 'dragon':
                return dragon;
            case 'electric':
                return electric;
            case 'fairy':
                return fairy;
            case 'fighting':
                return fighting;
            case 'fire':
                return fire;
            case 'flying':
                return flying;
            case 'ghost':
                return ghost;
            case 'grass':
                return grass;
            case 'ground':
                return ground;
            case 'ice':
                return ice;
            case 'normal':
                return normal;
            case 'poison':
                return poison;
            case 'psychic':
                return psychic;
            case 'rock':
                return rock;
            case 'shadow':
                return shadow;
            case 'steel':
                return steel;
            case 'unknown':
                return unknown;
            case 'water':
                return water;
        }
    }

    function handleDelete(){
        if(myPokemon[0].createdInDB){
            dispatch(deletePokemon(myPokemon[0].id))
            dispatch(cleanDetail())
            dispatch(cleanPokemons())
            navigate('/home')
        }
        else{
            alert('You only can delete pokemons from database')
        }
    }

    function handleBack(){
        dispatch(cleanDetail())
        dispatch(cleanPokemons())
    }

    function handleUpdate(){
        if(myPokemon[0].createdInDB){
            navigate(`/update/${pokemonId.id}`)
        }
        else{
            alert('Only can update pokemons from database')
        }
    }

    return(

        <div>

        

        <div className={styles.bg}>

        <header className={styles.header}>
            <Link to='/home' >
                <button className={styles.back} onClick={() => handleBack()}>Come back</button>
            </Link>


            <button className={styles.update} onClick={() => handleUpdate()}>Update</button>

            <button className={styles.delete} onClick={() => handleDelete()}>Delete</button>
        </header>
        
        <br />
        <br />
        <br />
        <br />
            {
                myPokemon.length > 0 ?
                <div className={styles.container}>
                    <h1 className={styles.nombrePokemon}>Name pokemon: {myPokemon[0].name}</h1>
                    <img src={myPokemon[0].img} width='200px' height='200px'/>

                    <div className={styles.datos}>
                    <h3>Health points: {myPokemon[0].hp}</h3>
                    <h3>Attack: {myPokemon[0].attack}</h3>
                    <h3>Defense: {myPokemon[0].defense}</h3>
                    <h3>Speed: {myPokemon[0].speed}</h3>
                    <h3>Height: {myPokemon[0].height}</h3>
                    <h3>Weight: {myPokemon[0].weight}</h3>
                    </div>


                    <h3 className={styles.datos}>{myPokemon[0].types[0]}</h3>
                    <img className={styles.imageType} src={getLogoType(myPokemon[0].types[0][0])}/>

                    {myPokemon[0].types[1] ?

                        <div>
                        <h3 className={styles.datos}>{myPokemon[0].types[1]}</h3>
                        <img className={styles.imageType} src={getLogoType(myPokemon[0].types[1][0])}/>
                        </div>
                    : null}
                </div> :    
                
                <Loader />
            }

            
        </div>
        </div>
    )
}
