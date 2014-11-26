/*Programa que lee números de un archivo JSON, calcula su factorial y 
  los almacena en una estructura de datos 

  Entorno usado: Navegador
 */

//Función factorial
function factorial(numero) {
	if(numero == 0) { //factorial de 0 es 1
		return 1;
	}
	else{
		resul = 1
		for (i=1 ; i<= numero; i++) {
			resul = resul*i;
		}
	}
	return resul;
}

var facto = new Array; //Creo una estructura de datos donde almacenaré el resultado de mis factoriales

for(i in cifras) {
	facto[i] = factorial(cifras[i]);
}

for(i in cifras) {
	document.writeln("El factorial de " + i + " es " + facto[i]);
	document.writeln("<br>");
}
