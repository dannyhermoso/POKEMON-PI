import React from 'react'
import styles from './Loader.module.css'


export default function Loader(){
    return(
        <div>
        <h1 className={styles.title}>We're almost ready :D</h1>

            <section className={styles.background}>
            
  <div className={styles.jump_container}>
    <div className={styles.pokeball}>
      <div className={styles.pokeball__inner_circle}></div>
      <div className={styles.pokeball__line}></div>
    </div>
  </div>
  <div className={styles.ground}></div>
</section>

        </div>
    )
}