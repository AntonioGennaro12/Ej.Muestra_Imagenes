const cuerpo        = document.querySelector ("body");
const miContador    = document.querySelector ("#mi-cont");
const miBotClk      = document.querySelector ("#bot-click");
const miBotRst      = document.querySelector ("#bot-reset");
const miBotResta    = document.querySelector ("#bot-resta");


let contador = 0;


function cuentaCliks() {
    contador += 1;
    miContador.textContent = contador;
}

function resetCont(){
    contador = 0;
    miContador.textContent = contador;

}

function restaCliks(){

    contador -= 1;
    miContador.textContent = contador;
}


