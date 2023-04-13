/* El orden a utilizar es el siguiente:
e = enter;
o = over;
i = imes;
a = ai;
u = ufat;*/

function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();

//i es para que afecte a mayúsculas y a minusculas
//g es para toda la linea
//es para que afecte a multiples líneas o párrafos.

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/i,"ufat");

    document.getElementById("muñeco-img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();

//i es para que afecte a mayúsculas y a minusculas
//g es para toda la linea
//es para que afecte a multiples líneas o párrafos.

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/i,"u");

    document.getElementById("muñeco-img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto-2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!")
}