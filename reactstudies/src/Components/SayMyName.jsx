import React from 'react';

function SayMyName(props) {
    const {name, photo, age, profission} = props;
    return (
        <div>
            <img src={photo} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profission: {profission}</p>
        </div>
    );
}

export default SayMyName