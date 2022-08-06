function codificar () {

var textoDigitado = textoInput.value
var textoCodificado = ''

for(let i = 0; i < textoDigitado.length; i++){

    if ((textoDigitado[i] != textoDigitado[i].toUpperCase()) || textoDigitado[i] == " ") {

        if (textoDigitado[i] == 'a') {
            textoCodificado += 'ai';
        } 
        else if (textoDigitado[i] == 'e') {
            textoCodificado += 'enter';
        } 
        else if (textoDigitado[i] == 'i') {
            textoCodificado += 'imes';
        } 
        else if (textoDigitado[i] == 'o') {
            textoCodificado += 'ober';
        } 
        else if (textoDigitado[i] == 'u') {
            textoCodificado += 'ufat';
        } 
        else {
            textoCodificado += textoDigitado[i];
        }

    }
     else {
        alert("Não é permitido letras maiúsculas e/ou caracteres especiais!");
        return;
    }

}

textoSaida.innerHTML = textoCodificado;
textoInput.value = ''
textoInput.focus()
document.getElementById("div-messages").style.display = "none";
}



function decodificar() {

    var textoCodificado = textoInput.value
    var textoDescodificado = ''

    for(let i = 0; i < textoCodificado.length; i++){

        if ((textoCodificado[i] != textoCodificado[i].toUpperCase()) || textoCodificado[i] == " ") {
    
            if (textoCodificado[i] == 'a' && i < textoCodificado.length - 1) {
                textoDescodificado += 'a';
                if (textoCodificado[i + 1] == "i") {
                    i++;
                }
            } else if (textoCodificado[i] == 'e' && i < textoCodificado.length - 4) {
                textoDescodificado += 'e';
                if (textoCodificado[i + 1] == "n" && textoCodificado[i + 2] == "t" && textoCodificado[i + 3] == "e" && textoCodificado[i + 4] == "r") {
                    i += 4;
                }
            } else if (textoCodificado[i] == 'i' && i < textoCodificado.length - 3) {
                textoDescodificado += 'i';
                if (textoCodificado[i + 1] == "m" && textoCodificado[i + 2] == "e" && textoCodificado[i + 3] == "s") {
                    i += 3;
                }
            } else if (textoCodificado[i] == 'o' && i < textoCodificado.length - 3) {
                textoDescodificado += 'o';
                if (textoCodificado[i + 1] == "b" && textoCodificado[i + 2] == "e" && textoCodificado[i + 3] == "r") {
                    i += 3;
                }
            } else if (textoCodificado[i] == 'u' && i < textoCodificado.length - 3) {
                textoDescodificado += 'u';
                if (textoCodificado[i + 1] == "f" && textoCodificado[i + 2] == "a" && textoCodificado[i + 3] == "t") {
                    i += 3;
                }
            } else {
                textoDescodificado += textoCodificado[i];
            }
    
        }
         else {
            alert("Não é permitido letras maiúsculas e/ou caracteres especiais!");
            return;
        }

}

textoSaida.innerHTML = textoDescodificado;
textoInput.value = ''
textoInput.focus()
document.getElementById("div-messages").style.display = "none"; 

}




function copy() {

var copyText = textoSaida.innerHTML
navigator.clipboard.writeText(copyText)

}



var buttonCodificar = document.getElementById('button1')
var buttonDecodificar = document.getElementById('button2')
var buttonCopiar = document.getElementById("button3");
var textoInput = document.getElementById('textarea')
var textoSaida = document.getElementById('textarea-res')

buttonCodificar.onclick = codificar;
buttonDecodificar.onclick = decodificar;
buttonCopiar.onclick = copy;