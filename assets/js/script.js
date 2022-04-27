async function displayPokemon(){
    let namePokemon = document.getElementById("search").value;
    let nameFormat = namePokemon[0].toUpperCase() + namePokemon.substring(1);
    await fetch('assets/js/myPokedex.json')
        .then(response => response.json())
        .then(data => {
            if(typeof data.pokedex.find(item => item.name == nameFormat) == 'undefined'){
                document.getElementById('noResult').style.display = "grid";
                document.getElementById('noResult').innerHTML = "Aucun résultat";
                document.getElementById('result').style.display = "none";
            }else{
                let pokemon = data.pokedex.find(item => item.name == nameFormat).id;
                let pokemonName = data.pokedex.find(item => item.name == nameFormat).name;
            
        
    axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon)
    .then(function (response) {
        document.getElementById('noResult').style.display = "none";
        document.getElementById('result').style.display = "grid";
        document.getElementById('resultPicture').innerHTML= `<img src="${response.data.sprites.front_default}">`;
        document.getElementById('resultName').innerHTML= pokemonName;
        document.getElementById('resultNum').innerHTML= "N° " + response.data.id;
        document.getElementById('resultType').innerHTML= `<p class="${response.data.types[0].type.name}">${response.data.types[0].type.name}</p>`;
        if(typeof response.data.types[1] != 'undefined'){
            document.getElementById('resultType2').style.display = "block";
            document.getElementById('resultType2').innerHTML= `<p class="${response.data.types[1].type.name}">${response.data.types[1].type.name}</p>`;
        } else {
            document.getElementById('resultType2').style.display = "none";
        }
        document.getElementById('resultHeight').innerHTML= response.data.height / 10 + " m";
        document.getElementById('resultWeight').innerHTML= response.data.weight / 10 + " kg";
    })
} 
})
}

document.getElementById('search').addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
        displayPokemon();
    }
})
