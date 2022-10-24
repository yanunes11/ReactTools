import React from 'react';
import styles from './SayMyName.module.css'; //import from the css local

function SayMyName(props) {
    const {name, photo, age, profission} = props;
    return (
        <div className={styles.nameContainer}> 
            <img src={photo} alt={name}/>
            <h2 className={styles.nameContent}>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profission: {profission}</p>
        </div>
    );
}

export default SayMyName