import React from 'react';
import Corgi from "../Corgi/Corgi";

const  Loading = () =>{
    return(
        <div className={styles.wrapper}>
            <h1>Loading</h1>
            <Corgi/>
        </div>
    );
}

export  default  Loading;