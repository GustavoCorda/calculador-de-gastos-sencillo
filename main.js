document.getElementById("gasto").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    guardarGasto();
    document.getElementById('compra').focus();
  }
});

function guardarGasto() {
 $gasto = document.getElementById("gasto").value;
   $gastado = $gasto;
  
}

document.getElementById("compra").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    guardarCompra();
    document.getElementById('usado').focus();
  }
});

function guardarCompra() {
   $compra = document.getElementById("compra").value;
   $comprado = $compra;
  
}

document.getElementById("usado").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    guardarUsado();
    resultado();
    
  }
});

function guardarUsado() {
   $usado = document.getElementById("usado").value;
   $use = $usado;
 
}

function resultado() {
 $resultado = $gastado * $use / $comprado;
 document.getElementById("contenido-resultado").innerHTML = $resultado
}


