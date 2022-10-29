//Given reducer method:

function add(a, b) {
    if(!a){
        return b;
    }
    if(!b){
        return a;
    }
    return a + b
}

//Create a method called memoize such that:

// const memoizeAdd = memoize(add)


const memoize = (func) => {
    let cacheStore = {};

    return (...args) => {
        const agrKey = JSON.stringify(args);
        if (cacheStore[agrKey]) {
            console.log("fetching from cache-store");
            return cacheStore[agrKey];
        } else {
            console.log("not fetching from cache-store")
            let result = func(...args)
            cacheStore[agrKey] = result;
            return result
        }
    }

}

const memoizeAdd = memoize(add)

//then calling..
console.log(memoizeAdd(100, 100)) //returns 200)
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 200)); //returns 300
console.log(memoizeAdd(100, 100)); //returns without computing