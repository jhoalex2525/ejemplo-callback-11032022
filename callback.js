// funcion principal
function principal(callback){
    setTimeout(function(){
        console.log("Soy el proceso principal")
        callback()
    },2000)    
}
// llamando funcion principal
principal(secundaria)

// declarando el callback
function secundaria(){
    console.log("soy el proceso del callback")
}