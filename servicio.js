let url="https://api.spotify.com/v1/artists/3LLNDXrxL4uxXtnUJS5XWM/albums?market=US"
let token =  "Bearer BQAW0_LO6ZZhzHTD_cIJSx5zIQsLL7_dLs0kzkOXul4La_MB-ruHtDzAEB7aCvbLF-SE3lhX5xMrSLuSxLaIyKxwXRfXzH3fOb89WwGkVXBk0CAhv0StNHqfV6rnxIc05qn-giuKR9cDMcZX"
let parametros = {
    method: "GET",
    headers: {Authorization:token}
}
fetch(url,parametros) //fetch es una promesa
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})