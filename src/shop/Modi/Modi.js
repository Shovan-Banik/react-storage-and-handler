import React from 'react';
import { add, division, multiply, subtraction } from '../../utilities/calculate';

const Modi = () => {
    const first=20;
    const second =10;
    const addResult=add(first,second);
    const mulResult=multiply(first,second);
    const subResult=subtraction(first,second);
    const divResult=division(first,second);
    return (
        <div>
            <p>addition: {addResult}</p>
            <p>multiplication: {mulResult}</p>
            <p>subtruction: {subResult}</p>
            <p>division: {divResult}</p>
        </div>
    );
};

export default Modi;