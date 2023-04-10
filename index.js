function receivesAFunction(callback){
    callback ('Spy');
    return (callback);
}

function returnsANamedFunction(){
    return function receivesAFunction(){
        
    }
}

function returnsAnAnonymousFunction(){
    return function (){};
}