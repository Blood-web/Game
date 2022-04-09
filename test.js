var object={
Main:{
        M:[0,1,2],
        Locations:[0]
    },
    Maid:{
        M:[0,1,29],
        Locations:[0]
    }
}
console.log(object['Main']['M'][2]) //true - 2

console.log([object][1]['Main']['M'][2])