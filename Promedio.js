function calcularpromedio() {  
 var c1;
 var c2;
 var c3;
 var c4;
 var c5;
 var promedio;
 var cajaDeTexto +document.getElementById("calificacion1")
 var texto = cajaDeTexto.value;
 c1 = parseFloat(texto);

 cajaDeTexto = document.getelementById("calificacion2");
 texto = cajaDeTexto.value;
 c2 = parseFloat(texto);
  cajaDeTexto = document.getelementById("calificacion3");
 c3 = parseFloat(texto);
  cajaDeTexto = document.getelementById("calificacion4");
 c4 = parsefloat(texto);
  cajaDeTexto = document.getelementById("calificacion5");
 c5 = parseFloat(texto);
 promedio = c1 + c2 +3 + c4 + c5 / 5;
 alert("Tu Promedio es de: " + promedio);
}