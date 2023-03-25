import React, { useEffect, useState } from 'react';
import { getTotalValue } from '../../utilities/calculate';
import SingleShop from '../SingleShop/SingleShop';

const SuperShop = () => {
    // const supershops=[
    //     {id:1, name:'Sathi Store',value:500000},
    //     {id:2, name:'Mina Bazar',value:20000000},
    //     {id:3, name:'Agora',value:10000000},
    //     {id:4, name:'Price Bazar',value:15000000},
    //     {id:5, name:'Armani',value:100000},
    //     {id:6, name:'Sopno',value:40000000},
    // ]
    const [supershops,setSupershops]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSupershops(data))
    },[])
    const total=getTotalValue(supershops);
    return (
        <div>
            <h1>Welcome to shops list</h1>
            <p>total money needed:{total}</p>
            {
                supershops.map(supershop=><SingleShop key={supershop.id}
                supershop={supershop}></SingleShop>)
            }
        </div>
    );
};

export default SuperShop;