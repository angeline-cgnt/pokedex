function displayPokemon(){
let pokemon = document.getElementById("search").value;

    axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon)
    .then(function (response) {
        document.getElementById('result').style.display = "grid";
        console.log(response.status);
        document.getElementById('resultPicture').innerHTML= `<img src="${response.data.sprites.front_default}">`;
        document.getElementById('resultName').innerHTML= response.data.species.name;
        document.getElementById('resultNum').innerHTML= response.data.id;
        document.getElementById('resultType').innerHTML= `<p class="${response.data.types[0].type.name}">${response.data.types[0].type.name}</p>`;
        document.getElementById('resultHeight').innerHTML= response.data.height;
        document.getElementById('resultWeight').innerHTML= response.data.weight;
    })
}

// document.getElementById('btnSrch').addEventListener('click',function(){
//     axios.get('https://pokeapi.co/api/v2/pokemon/'+document.getElementById('search').value)
//     .then(function (response) {
//         console.log(response.data.height);
//         document.getElementById('result').innerHTML=response.data.height;
//     })
// })
