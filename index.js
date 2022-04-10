let cats =["Milo", "Otis", "Garfield"];

function reset(){
    cats.length = 0;

    return cats.push('Milo', 'Otis', 'Garfield')
}

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    reset();
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    reset();
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    reset();
    return cats.shift();
}
reset()
function appendCat(name){
    return[...cats, name]
}
function prependCat(name){
    return [name ,...cats]
}
