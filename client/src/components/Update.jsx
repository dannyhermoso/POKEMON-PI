import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cleanDetail, cleanPokemons, updatePokemon, getDetail, getPokemons } from '../actions'
import styles from './Update.module.css'

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

export default function Update() {

   const myPokemon = useSelector((state) => state.detail)
   const types = useSelector((state) => state.types)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { id } = useParams()

   const [input, setInput] = useState({
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: []
   })


   useEffect(() => {
      dispatch(getDetail(id))
   }, [dispatch, id])


   function handleClick() {
      dispatch(cleanDetail());
      dispatch(cleanPokemons());
   }

   function handleChange(e) {
      setInput({
         ...input,
         [e.target.name]: e.target.value
      })
   }

   function handleSubmit(e) {
     
         dispatch(cleanPokemons());
         dispatch(cleanDetail());
         e.preventDefault();
         dispatch(updatePokemon(id, input))
         alert('Pokemon updated successfully.')
         navigate(`/detail/${id}`);

      
   }

   function handleSelect(e) {
      if (e.target.value === input.types[0] && input.types.length < 2) {
         alert('You can not select the same type of pokemon')
      }
      else if (input.types.length < 2) {
         setInput({
            ...input,
            types: [...input.types, e.target.value]
         })
      }
      else {
         alert('Max 2 types per pokemon')
      }
   }
   console.log(myPokemon[0].types.length)

   function getLogo(type) {
      switch (type) {
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

   function handleDelete(el) {
      setInput({
         ...input,
         types: input.types.filter((type) => type !== el)
      })
   }

   return (
      <div className={styles.general}>
         <Link to='/home'>
            <button className={styles.back}>Come back</button>
         </Link>

         <h1 className={styles.h1}>Update {myPokemon[0].name}</h1>

         <div className={styles.clearfix}></div>

         <img src={myPokemon[0].img} className={styles.imagen}></img>

         
      
         <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' >
            <div>
               <div className={styles.formulario}>
                  <label>Hp: </label>
                  <input
                     type='number'
                     value={input.hp}
                     name='hp'
                     min='0'
                     max='350'
                     placeholder='Hp'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.hp} className={styles.progress}/>
               </div>
               <div className={styles.formulario}>
                  <label>Attack: </label>
                  <input
                     type='number'
                     value={input.attack}
                     name='attack'
                     min='0'
                     max='350'
                     placeholder='Attack'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.attack} className={styles.progress}/>
               </div>
               <div className={styles.formulario}>
                  <label>Defense:</label>
                  <input
                     type='number'
                     value={input.defense}
                     name='defense'
                     min='0'
                     max='350'
                     placeholder='Defense'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.defense} className={styles.progress}/>
               </div>
               <div className={styles.formulario}>
                  <label>Speed: </label>
                  <input
                     type='number'
                     value={input.speed}
                     name='speed'
                     min='0'
                     max='350'
                     placeholder='Speed'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.speed} className={styles.progress}/>
               </div>
               <div className={styles.formulario}>
                  <label>Height: </label>
                  <input
                     type='number'
                     value={input.height}
                     min='0'
                     max='350'
                     name='height'
                     placeholder='Height'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.height} className={styles.progress}/>
               </div>
               <div className={styles.formulario}>
                  <label>Weight: </label>
                  <input
                     type='number'
                     value={input.weight}
                     min='0'
                     max='350'
                     name='weight'
                     placeholder='Weight'
                     onChange={handleChange}
                     className={styles.input}
                  />
                  <progress max='350' min='0' value={input.weight} className={styles.progress}/>
               </div>
               <select onChange={handleSelect} className={styles.selectType}>
                  {types.map((el) => (

                     <option key={el.id} value={el.name}>{el.name}</option>

                  ))}
               </select>

               <span>
                  {input.types.map(el =>
                     <div key={el}>

                        <p className={styles.textType}>{el}</p>
                        <img src={getLogo(el)} alt="" className={styles.imageType}/>
                        <button onClick={() => handleDelete(el)} key={el} className={styles.deleteType}>X</button>

                     </div>
                  )}
               </span>

               <button type='submit' className={styles.buttonCreate}>Update pokemon</button>
            </div>
         </form>
      </div>
   )
}