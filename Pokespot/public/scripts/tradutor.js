function traduzir() {
    var textoUsuario = texto.value;
    div_unown.innerHTML = '';

    for (var caracterAtual = 0; caracterAtual < textoUsuario.length; caracterAtual += 1) {

        var numero = caracterParaNumero(textoUsuario[caracterAtual]);

        if (numero < 0) {
            alert('Caracter inválido!');
            break;
        } else {
            div_unown.innerHTML += `<img src="assets/img/unown/unown${numero}.png">`;
        }
    }
}

function caracterParaNumero(caracter) {
    switch (caracter.toLowerCase()) {
        case caracter = 'a':
            return 1;    
            break;
        case caracter = 'b':
            return 2;    
            break;
        case caracter = 'c':
            return 3;    
            break;
        case caracter = 'd':
            return 4;    
            break;
        case caracter = 'e':
            return 5;    
            break;
        case caracter = 'f':
            return 6;    
            break;
        case caracter = 'g':
            return 7;    
            break;
        case caracter = 'h':
            return 8;    
            break;
        case caracter = 'i':
            return 9;    
            break;
        case caracter = 'j':
            return 10;    
            break;
        case caracter = 'k':
            return 11;    
            break;
        case caracter = 'l':
            return 12;    
            break;
        case caracter = 'm':
            return 13;    
            break;
        case caracter = 'n':
            return 14;    
            break;
        case caracter = 'o':
            return 15;    
            break;
        case caracter = 'p':
            return 16;    
            break;
        case caracter = 'q':
            return 17;    
            break;
        case caracter = 'r':
            return 18;    
            break;
        case caracter = 's':
            return 19;    
            break;
        case caracter = 't':
            return 20;    
            break;
        case caracter = 'u':
            return 21;    
            break;
        case caracter = 'v':
            return 22;    
            break;
        case caracter = 'w':
            return 23;    
            break;
        case caracter = 'x':
            return 24;    
            break;
        case caracter = 'y':
            return 25;    
            break;
        case caracter = 'z':
            return 26;    
            break;
        case caracter = '!':
            return 27;    
            break;
        case caracter = '?':
            return 28;    
            break;
        case caracter = ' ':
            return 29;    
            break;
        default:
            return -1;
            break;
    }
}