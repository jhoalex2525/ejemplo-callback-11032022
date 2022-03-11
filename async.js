function principal(){
    let promesa = new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("Soy el proceso principal")
            let numero = 6
            if(numero>=5){
                resolve("termine (POSITIVO)")
            }
            else{
                reject("termino (NEGATIVO)")
            }                       
            
        }, 2000)
    })
    return promesa
}
async function secundaria(){
    try{
        await principal()
        console.log("Soy el proceso del callback")
    }
    catch(error){
        console.log("Error")
    }
}

// llamo a la funcion secundaria
// ya que esta SOLO SE EJECUTA (ESPERA) SI Y SOLO SI la principal se ejecuta

secundaria()