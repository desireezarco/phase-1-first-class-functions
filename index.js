function receivesAFunction(callback){
    callback ('Spy');
    return (callback);
}

const returnsANamedFunction = () => {
    const receivesAFunction = () => console.log('Hi')
    return receivesAFunction;
    }


function returnsAnAnonymousFunction(){
    return function (){};
}