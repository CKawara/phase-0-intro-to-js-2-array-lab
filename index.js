let cats =["Milo", "Otis", "Garfield"];

function reset(){
    cats.length = 0;

    return cats.push('Milo', 'Otis', 'Garfield')
}

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    reset()
    return cats.unshift(name);
}
