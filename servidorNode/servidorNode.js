//Servidor simple en Node

//Para lanzarlo, escribir "node servidorNode.js" en la consola

//Cargamos el modulo http y url
var http = require("http");
var url = require("url");
//inicializamos el contador de visitas
var visitas = 0;

//La funcion onRequest, ejecutará todo lo que quiero que suceda cuando se envíe una petición a mi servidor
function onRequest(request, response) {
	//Para mostrar un mensaje por la consola cada vez que hacen una petición al servidor
	console.log("Request received");
	//Extraemos el path de la url solicitada por el navegador
	var pathname = url.parse(request.url).pathname;
	//Hacemos esto para evitar que cuente como una visita las peticiones del favicon
	if (pathname == "/") {
		visitas++;
	}

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Esto es un servidor en node.js");
	response.write("\nEl numero de visitas hasta ahora es: " + visitas);
	response.end();
}
//Llamamos a la funcion createServer que ofrece el modulo http para inicializar el servidor
//Pasamos a la función createServer la función onRequest
http.createServer(onRequest).listen(8888); 

//Mensaje para la consola al lanzar el servidor
console.log("Server running at 127.0.0.1:8888.");