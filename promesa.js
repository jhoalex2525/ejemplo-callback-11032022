// Una promesa con buena estructura tiene el reject con catch y el resolve con then
// funcion principal
function principal(){
    let promesa = new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("Soy el proceso principal")
            let numero = 5
            if(numero>=5){
                resolve("Soy el proceso del callback (POSITIVO)")
            }
            else{
                reject("Soy el proceso del callback (NEGATIVO)")
            }                       
            
        }, 2000)
    })
    return promesa
}
// llamando funcion principal
principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(error){
    console.log(error)
})