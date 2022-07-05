import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'
import pikachu from '../assets/images/pikachu.gif'

export default function LandingPage(){
    return(
        


        <div className={styles.principio}>

<h1 className={styles.h1}>POKEMON APP</h1>
        
        
<h4 className={styles.h4}>© Danny Hermoso</h4>
        
        

            
        <div className={styles.container}>
        <div className={styles.view}>
          <div className={styles.magic_dust_1}></div>
          <div className={styles.magic_dust_2}></div>
          <div className={styles.magic_dust_3}></div>
          <div className={styles.magic_dust_4}></div>
          <div className={styles.magic_dust_5}></div>
          <div className={styles.magic_dust_6}></div>
          <div className={styles.magic_dust_7}></div>
          <div className={styles.magic_dust_8}></div>
        <Link to='/home'>
          <div className={styles.ball_and_shadow_view}>
          
          <img src={pikachu} className={styles.pikachu}/>
            <div className={styles.shadow}></div>
            <div className={styles.ball}>
              <div className={styles.upper_half}></div>
              <div className={styles.lower_half}></div>
              <div className={styles.circle}></div>
        
            </div>
          </div>
          </Link>
          <div className={styles.magic_dust_9}></div>
        </div>
      </div>
      

      </div>

        
    )
}