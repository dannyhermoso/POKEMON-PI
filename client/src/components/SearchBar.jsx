import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../actions";
import styles from './SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNamePokemon(name))
        setName('')
    }

    return(
        <div className={styles.searchBar}>
            <input 
            type='text'
            placeholder="Search..."
            onChange={e => handleInputChange(e)}
            className={styles.input}
            />

            <button type='submit' onClick={e => handleSubmit(e)} className={styles.button}>Search</button>
        </div>
    )
}