function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function callback(){
    console.log("Hello World")
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("Hello World")
  }
}
