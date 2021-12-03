import React from  'react';

export default function Card({id, name, img}){
    return(
            <div>
                <h3>{name} </h3>
                <h5>{id}</h5>
                <img src={img} alt='img not found' width='200px' height='250px'/> 
            </div>    
        )
}