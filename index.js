var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name) ;
}

function destructivelyPrependCat(name) {
    cats.unshift(name) ;
}

function destructivelyRemoveLastCat() {
    cats.pop() ;
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0, -1);
}