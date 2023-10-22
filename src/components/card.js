//import React from 'react';
import './card.css';

const Card = ({name,email,id})=> {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}?200x200`}  alt='Robofriend'/>
            <div className="card">
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );

}
export default Card;