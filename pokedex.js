//Función para buscar un pokeémon en la PokeAPI
function BuscarPokemon(){

    //Constantes en el DOM
    const imgPokemon = document.getElementById("imgPokemon");
    const nombrePokemon = document.getElementById("pantallaName");
    const tipoPokemon = document.getElementById("idTipo");
    const ataquePokemon = document.getElementById("idAtaque");
    const defensaPokemon = document.getElementById("idDefensa");
    const velocidadPokemon = document.getElementById("idVelocidad");
    const alturaPokemon = document.getElementById("pantallaAltura");
    const pesoPokemon = document.getElementById("pantallaPeso");

    const entrada = document.getElementById("entrada");
    let nombrePoke = entrada.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${nombrePoke}`;
    fetch(url).then((res)=>{
        if(res.status !="200"){
            imgPokemon.src = ("assets/images/error.gif");
            nombrePokemon.innerHTML = "NOT FOUND";
            tipoPokemon.innerHTML = `Tipo:`;
            ataquePokemon.innerHTML = `Ataque:`;
            defensaPokemon.innerHTML = `Defensa:`;
            velocidadPokemon.innerHTML = `Velocidad:`;
            alturaPokemon.innerHTML = `Altura:`;
            pesoPokemon.innerHTML = `Peso:`;
        }else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokImg = data.sprites.front_default;
        let name = data.name;
        let tipo = data.types[0].type.name;  
        let ataque = data.abilities[0].ability.name;
        let defensa = data.stats[3].base_stat;
        let velocidad = data.stats[0].base_stat;
        let altura = data.height;
        let peso = data.weight;

        //Elementos para posicionar los nuevos valores
        imgPokemon.src = pokImg;
        nombrePokemon.innerHTML = name;
        tipoPokemon.innerHTML = `Tipo: ${tipo}`;
        ataquePokemon.innerHTML = `Ataque: ${ataque}`;
        defensaPokemon.innerHTML = `Defensa: ${defensa}`;
        velocidadPokemon.innerHTML = `Velocidad: ${velocidad}`;
        alturaPokemon.innerHTML = `Altura:${altura * 10} cm`;
        pesoPokemon.innerHTML = `Peso: ${peso / 10} Kg`;
    })
}




