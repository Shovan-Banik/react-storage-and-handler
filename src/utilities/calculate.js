function add(first,second){
    return first+second;
}
function multiply(first,second){
    return first*second;
}
function subtraction(first,second){
    return first-second;
}
function division(first,second){
    return first/second;
}

/* reduce loop exploring */

// const numbers=[2,4,5,1,6,7];
// const sumReducer=(previous,current)=>previous+current;
// const total=numbers.reduce(sumReducer,0);
// console.log(total);

// const supershops=[
//         {id:1, name:'Sathi Store',value:500},
//         {id:2, name:'Mina Bazar',value:200},
//         {id:3, name:'Agora',value:100},
//         {id:4, name:'Price Bazar',value:150},
//         {id:5, name:'Armani',value:700},
//         {id:6, name:'Sopno',value:400},
//     ]
//     const valueReducer=(previous,current)=>previous+current.value;
//     const result=supershops.reduce(valueReducer,0);
//     console.log(result);
const getTotalValue=properties=>{
    const reducer=(previous,current)=>previous+current.value;
    const total=properties.reduce(reducer,0);
    return total;
}


export {add,multiply,subtraction,division,getTotalValue};