//Script para mudar cor de fundo
var mudarcor = function (cor) {
	var element = document.querySelector('#fundo');
	element.style = 'background: ' + cor;
}
//script para mudar a cor do select
var mudarcorselect = function (select) {
	var element = document.querySelector('#fundo');
	element.style = 'background: ' + select.value;
	}
//script para mostrar / ocultar paragrafo
var mostrarocultar = function () {
	var element = document.querySelector('#paragrafo');

	 if (element.style.display == 'none') {
	 	element.style.display  = 'block';
	}
	else {
		element.style.display  = 'none';
		}	
}
function palindromo(){
	var palavra = document.querySelector('#palavra').value 
	palavra = palavra.toLowerCase(); //converte tudo para minusculo 
	palavra = palavra.replace(/[^a-zA-Z]/gi, ''); //Expressão regular para deixar somente caracteres de a à Z 
	var palavraInversa = palavra.split('').reverse().join(''); 
	if (palavraInversa == palavra)
		alert('Palavra Palindroma');
	else { 
		alert('Palavra nao permite inversao')
}
}
/*var Arraypalavras = ['iicc', 'cecarar', 'honda'];    
function palindromize(words) {
    var p = words.split("").reverse().join("");
    if(p === words){
        return(words);
    } else {
        return("0");
    }
}
palindromize("viicc");
palindromize("cecarar");
palindromize("honda");*/