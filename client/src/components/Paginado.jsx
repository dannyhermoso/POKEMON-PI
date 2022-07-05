import React from 'react'
import styles from './Paginado.module.css'

export default function Paginado({ pokemonPerPage, allPokemons, paginado }){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return(
        <nav className={styles.paginadoMargin}>
            <ul >
                {pageNumbers && pageNumbers.map(number =>(
                    <div className={styles.buttonpage}>
                    <li className={styles.li} key={number}>
                    <a onClick={() => paginado(number)} className={styles.a}> {number} </a>
                    </li>
                    </div>
                ))}
            </ul>
        </nav>
    )

}