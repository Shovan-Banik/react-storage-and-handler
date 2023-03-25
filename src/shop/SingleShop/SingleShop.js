import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakeDataBase';

const SingleShop = (props) => {
    const {id,name,value}=props.supershop;
    const addToCart=(id)=>{
        addToDb(id);
    }
    const removeFromCart=id=>{
        removeFromDb(id);
    }
    return (
        <div style={{border:'4px solid black',backgroundColor:'blue',color:'white',padding:'10px',margin:'10px',borderRadius:'20px'}}>
            <h2>Name: {name}</h2>
            <p>Value: {value}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={()=>addToCart(id)} style={{borderRadius:'10px',padding:'10px'}}>Add to cart</button>
            <button onClick={()=>removeFromCart(id)} style={{borderRadius:'10px',padding:'10px',margin:'5px'}}>Remove from cart</button>
        </div>
    );
};

export default SingleShop;