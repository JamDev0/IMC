let InpPeso = document.querySelector('#InpPeso');

let InpAltura = document.querySelector('#InpAltura');

let Calcular = document.querySelector('#Calcular');

let Resultado = document.querySelector('#Resultado');


Calcular.addEventListener('click', event => {
    Resultado.innerHTML(InpPeso.value/Math.pow(InpAltura.value, 2));
});


ConfigFlat = {
    maxDate: "30.12.2999",
};


Calendario = flatpickr("#InputData", ConfigFlat);


Calcular.addEventListener('click', CalcIMC)

function CalcIMC()
{
    let Altura = parseFloat(InpAltura.value);

    let Peso = parseFloat(InpPeso.value);

    document.querySelector('#ResultadoP').innerHTML = Peso/(Math.pow(Altura,2));
}