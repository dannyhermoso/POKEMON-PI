import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postPokemon, getTypes } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PokemonCreate.module.css'

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


export default function PokemonCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const types = useSelector((state) => state.types);
    const allThePokemons = useSelector((state) => state.allPokemons)

    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getTypes());
    }, [])



    function validate(input) {
        let errors = {}
        let exist = false;
        allThePokemons.map(el => el.name === input.name ? exist = true : null)
        if (exist) {
            errors.name = 'This pokemon already exists'
        }
        if (!input.name) {
            errors.name = 'A name is required'
        }
        if (input.name.length > 20) {
            errors.name = 'Maximun name characters are 20'
        }
        if (!/^[A-Z]/.test(input.name)) {
            errors.name = 'First letter must be uppercase'
        }
        if (!input.hp) {
            errors.hp = 'Hp pokemon is required'
        }
        if (!input.attack) {
            errors.attack = 'Attack pokemon is required'
        }
        if (!input.defense) {
            errors.defense = 'Defense pokemon is required'
        }
        if (!input.speed) {
            errors.speed = 'Speed pokemon is required'
        }
        if (!input.height) {
            errors.height = 'Height pokemon is required'
        }
        if (!input.weight) {
            errors.weight = 'Weight pokemon is required'
        }
        if (!input.img) {
            errors.img = 'Image pokemon is required'
        }
        if (input.types.length === 0 || input.types === undefined) {
            errors.types = 'Type of pokemon is required'
        }
        return errors
    }



    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e) {
        setErrors(validate({
            ...input,
            types: [...input.types, e.target.value]
        }))
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
            alert('Maximun 2 types per pokemon')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postPokemon(input))
        alert('Pokemon created succesfully:D')
        setInput({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            img: '',
            types: []
        })
        navigate('/home');
    }

    function handleDelete(el) {
        setErrors(validate({
            ...input,
            types: input.types.filter((e) => e !== el)
        }))
        setInput({
            ...input,
            types: input.types.filter((type) => type !== el)
        })
    }


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


    return (
        <div className={styles.bg}>
            <br />
            <Link to='/home' className={styles.back}>Come back</Link>


            <header className={styles.header}>

                <h1>Create your own pokemon!</h1>
            </header>





            <div className={styles.formulario}>

                <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                    <div>
                        <label>Name: </label>
                        <input
                            type='text'
                            value={input.name}
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}

                        />
                        {errors.name &&
                            (<p className={styles.validations}>{errors.name}</p>
                            )}
                    </div>
                    <div>
                        <label>Hp: </label>
                        <input
                            type='number'
                            value={input.hp}
                            name='hp'
                            min='0'
                            max='350'
                            placeholder='Hp'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.hp} />
                        {errors.hp &&
                            (<p className={styles.validations}>{errors.hp}</p>)}
                    </div>
                    <div>
                        <label>Attack: </label>
                        <input
                            type='number'
                            value={input.attack}
                            name='attack'
                            min='0'
                            max='350'
                            placeholder='Attack'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.attack} />
                        {errors.attack &&
                            (<p className={styles.validations}>{errors.attack}</p>)}
                    </div>
                    <div>
                        <label>Defense:</label>
                        <input
                            type='number'
                            value={input.defense}
                            name='defense'
                            min='0'
                            max='350'
                            placeholder='Defense'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.defense} />
                        {errors.defense &&
                            (<p className={styles.validations}>{errors.defense}</p>)}
                    </div>
                    <div>
                        <label>Speed: </label>
                        <input
                            type='number'
                            value={input.speed}
                            name='speed'
                            min='0'
                            max='350'
                            placeholder='Speed'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.speed} />
                        {errors.speed &&
                            (<p className={styles.validations}>{errors.speed}</p>)}
                    </div>
                    <div>
                        <label>Height: </label>
                        <input
                            type='number'
                            value={input.height}
                            min='0'
                            max='350'
                            name='height'
                            placeholder='Height'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.height} />
                        {errors.height &&
                            (<p className={styles.validations}>{errors.height}</p>)}
                    </div>
                    <div>
                        <label>Weight: </label>
                        <input
                            type='number'
                            value={input.weight}
                            min='0'
                            max='350'
                            name='weight'
                            placeholder='Weight'
                            onChange={handleChange}

                        />
                        <progress max='350' min='0' value={input.height} />
                        {errors.weight &&
                            (<p className={styles.validations}>{errors.weight}</p>)}
                    </div>
                    <div>
                        <label>Image: </label>
                        <input
                            type='text'
                            value={input.img}
                            name='img'
                            placeholder='Image'
                            onChange={handleChange}

                        />
                        {errors.img &&
                            (<p className={styles.validations}>{errors.img}</p>)}
                    </div>
                    <select onChange={handleSelect} className={styles.selectType}>
                        {types.map((el) => (

                            <option  key={el.id} value={el.name}>{el.name}</option>


                        ))}
                        {errors.types &&
                            (<p>{errors.types}</p>)}
                    </select>
                    <span>
                        {input.types.map(el =>
                            <div key={el}>
                                {console.log(input.types)}
                                <p className={styles.textType}>{el}</p>
                                <img src={getLogoType(el)} alt="" className={styles.imageType}/>
                                <button key={el} className={styles.deleteType} onClick={() => handleDelete(el)}>X</button>

                            </div>)}
                    </span>

                    <button type='submit' className={styles.buttonCreate}>Create pokemon</button>
                </form>
            </div>
        </div>
    )
}