const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

const coordenades = [12, 5, 8];

const preus = [100, 200, 300, 400];

const edats = [16, 21, 18, 24, 12, 30];

const notes = [7, 9, 5, 10, 8];

const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};

function funcionStart(){
    let divEjercicios = document.getElementById("divEjercicios")

    imprimirEstudiante(divEjercicios)
    imprimirCoordenadas(divEjercicios)
    pujarPreus(divEjercicios)
    filtrarEdats(divEjercicios)
    reduceNotas(divEjercicios)
    crearEjercicio6(divEjercicios)
    anyadirCampo(divEjercicios)

}

function imprimirEstudiante(divEjercicios){
    let divEjercicio1 = document.createElement("div");
    let ejercicio1 = document.createElement("h4");
    ejercicio1.textContent = "Ejercicio 1";
    let resultadoEjercicio1 = document.createElement("p");
    divEjercicio1.setAttribute("id", "ejercicio1");

    resultadoEjercicio1.textContent = `En ${estudiant.nom} te ${estudiant.edat} anys i a tret un ${estudiant.notes.matematiques} a matemàtiques.`

    divEjercicios.appendChild(divEjercicio1)

    divEjercicio1.appendChild(ejercicio1)
    divEjercicio1.appendChild(resultadoEjercicio1)
}

function imprimirCoordenadas(divEjercicios){

    let divEjercicio2 = document.createElement("div");
    let ejercicio2 = document.createElement("h4");
    ejercicio2.textContent = "Ejercicio 2";
    let resultadoEjercicio2 = document.createElement("p");
    divEjercicio2.setAttribute("id", "ejercicio2");

    resultadoEjercicio2.textContent = `x: ${coordenades[0]}, y:${coordenades[1]}, z:${coordenades[2]}`

    divEjercicios.appendChild(divEjercicio2)

    divEjercicio2.appendChild(ejercicio2)
    divEjercicio2.appendChild(resultadoEjercicio2)
}

function pujarPreus(divEjercicios){
    
    let divEjercicio3 = document.createElement("div");
    let ejercicio3 = document.createElement("h4");
    ejercicio3.textContent = "Ejercicio 3";
    let resultadoEjercicio3 = document.createElement("p");
    divEjercicio3.setAttribute("id", "ejercicio3");

    let newPrice = preus.map(preu => preu + (preu / 10))    

    resultadoEjercicio3.textContent = `${newPrice}`

    divEjercicios.appendChild(divEjercicio3)

    divEjercicio3.appendChild(ejercicio3)
    divEjercicio3.appendChild(resultadoEjercicio3)
}

function filtrarEdats(divEjercicios){
    
    let divEjercicio4 = document.createElement("div");
    let ejercicio4 = document.createElement("h4");
    ejercicio4.textContent = "Ejercicio 4";
    let resultadoEjercicio4 = document.createElement("p");
    divEjercicio4.setAttribute("id", "ejercicio4");

    let edadesFiltradas = edats.filter(anys => anys>=18)

    resultadoEjercicio4.textContent = `${edadesFiltradas}`

    divEjercicios.appendChild(divEjercicio4)

    divEjercicio4.appendChild(ejercicio4)
    divEjercicio4.appendChild(resultadoEjercicio4)
}

function reduceNotas(divEjercicios){
    let divEjercicio5 = document.createElement("div");
    let ejercicio5 = document.createElement("h5");
    ejercicio5.textContent = "Ejercicio 5";
    let resultadoEjercicio5 = document.createElement("p");
    divEjercicio5.setAttribute("id", "ejercicio5");

    let notaMedia = notes.reduce( function(resultado, nota){ 
        return resultado+nota 
    }) / notes.length;

    resultadoEjercicio5.textContent = `${notaMedia}`

    divEjercicios.appendChild(divEjercicio5)

    divEjercicio5.appendChild(ejercicio5)
    divEjercicio5.appendChild(resultadoEjercicio5)
}

function crearEjercicio6(divEjercicios){
    
    let divEjercicio6 = document.createElement("div");

    let ejercicio6 = document.createElement("h5");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre artículo";
    inputNombre.id = "inputNombre";

    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Precio artículo";
    inputPrecio.id = "inputpPrecio";

    let inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.placeholder = "Cantidad artículo";
    inputCantidad.id = "inputCantidad";

    let botonSubmit = document.createElement("button");

    botonSubmit.textContent = "Submit DATA"

    let resultado = document.createElement("p")
    

    botonSubmit.addEventListener("click", ()=>{
        if(inputNombre.value && inputCantidad.value && inputPrecio.value){
            console.log("TODO ESCRITO Y BIEN")
            resultado.textContent = ejecucionEjercicio6(inputNombre.value,inputCantidad.value,inputPrecio.value)
        }else{
            console.log("ERROR")
            resultado.textContent = "Datos incompletos."
        }
    })


    ejercicio6.textContent = "Ejercicio 6";
    divEjercicio6.setAttribute("id", "ejercicio6");

    divEjercicios.appendChild(divEjercicio6);

    divEjercicio6.appendChild(ejercicio6);
    divEjercicio6.appendChild(inputNombre);
    divEjercicio6.appendChild(inputPrecio);
    divEjercicio6.appendChild(inputCantidad);
    divEjercicio6.appendChild(botonSubmit);
    divEjercicio6.appendChild(resultado);

}

function ejecucionEjercicio6(nombre, cantidad, precio){
    let objeto = {
        Nombre: nombre,
        Cantidad: cantidad,
        Precio: precio
    }

    return `${JSON.stringify(objeto)}`
}

function anyadirCampo(divEjercicios){
    let divEjercicio7 = document.createElement("div");
    let ejercicio7 = document.createElement("h5");
    ejercicio7.textContent = "Ejercicio 7";
    let resultadoEjercicio7 = document.createElement("p");
    divEjercicio7.setAttribute("id", "ejercicio7");

    let inputNombreCampo = document.createElement("input");
    inputNombreCampo.type = "text";
    inputNombreCampo.placeholder = "Nombre del campo nuevo";
    inputNombreCampo.id = "inputCampo";

    

    let inputNombreValor = document.createElement("input");
    inputNombreValor.type = "text";
    inputNombreValor.placeholder = "Valor del campo nuevo";
    inputNombreValor.id = "inputValor";

    let botonSubmit = document.createElement("button");

    botonSubmit.textContent = "Submit DATA"    

    botonSubmit.addEventListener("click", ()=>{
        if(inputNombreCampo.value && inputNombreValor.value){
            let nombre = inputNombreCampo.value
            let campo = inputNombreValor.value
            console.log("TODO ESCRITO Y BIEN")
            cotxe[`${nombre}`] = campo
            resultadoEjercicio7.textContent = `${JSON.stringify(cotxe)}`

        }else{
            console.log("ERROR")
            resultadoEjercicio7.textContent = `ERROR`
        }
    })

    divEjercicios.appendChild(divEjercicio7)

    divEjercicio7.appendChild(ejercicio7)
    divEjercicio7.appendChild(inputNombreCampo);
    divEjercicio7.appendChild(inputNombreValor);
    divEjercicio7.appendChild(botonSubmit);
    divEjercicio7.appendChild(resultadoEjercicio7)
}