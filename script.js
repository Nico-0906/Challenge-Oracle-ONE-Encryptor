var botonEncriptar = document.getElementById("btn-encriptar");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var botonCopiar = document.getElementById("btn-copy");

function encriptar(texto){

	var resultado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");
	
	return resultado;
}

function desencriptar(texto){

	var resultado = texto.replace(/(enter)/ig, "e").replace(/(imes)/ig, "i").replace(/(ai)/ig, "a").replace(/(ober)/ig, "o").replace(/(ufat)/ig, "u");
	
	return resultado;
}

botonEncriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = encriptar(texto);
	document.getElementById("msg").value = texto;
});

botonDesencriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = desencriptar(texto);
	document.getElementById("msg").value = texto;
});

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#msg");
    texto.select();
    document.execCommand('copy');
	alert("Copiado!");

});