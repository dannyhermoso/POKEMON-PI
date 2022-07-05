import React from 'react'
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
import psychic from '../assets/images/psychic.png'
import poison from '../assets/images/poison.png'
import rock from '../assets/images/rock.png'
import steel from '../assets/images/steel.png'
import water from '../assets/images/water.png'
import unknown from '../assets/images/unknown.png'
import shadow from '../assets/images/shadow.jpg'
import styles from './Card.module.css'

function Card({ name, image, type }){

    function getLogo(type){
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
            default:
                break;
        }
    }


    return(
        <div className={styles.card}>
            
            <h2>{name}</h2>

            <img src={image} width='90px' height='90px'/>


            <div className={styles.clearfix}></div>

            <div className={styles.tipos}>
            {/* <h3>{type[0]}</h3> */}
            <img src={getLogo(type[0][0])} alt="" width='60px'/>

            {/* <h3>{type[1]}</h3> */}
            {type.length > 1?
            <img src={getLogo(type[1][0])} alt=""  width='60px'/>    : null}
            </div>
            
        </div>
    )
}

export default Card;