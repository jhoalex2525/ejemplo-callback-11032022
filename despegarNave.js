// 1.   Recorrer arreglo
//      Filtrar solo los id<=10
// 2.   Si hay menor o igual que 10 pueden ir a su nave y si no hay se tienen que quedar en el planeta

// declaramos la funcion principal
function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
    let planosFiltrados = planos.filter(function(plano){
        return(plano<=10)
    })
    buscarPlanos(planosFiltrados)
}

// llamando funcion principal, no declarando por eso no lleva el function
filtrarPlanos(111,31,15,17,110,20,11,15,14,12,function(planos){ //un parametro de una funcion es una variable local, tiene cualquier nombre
    if(planos.length>0){
        console.log("Arranque mano")
    }
    else{
        console.log("Quieto mano, no arrancamos")
    }
})