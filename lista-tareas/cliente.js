//Cliente para añadir una lista de tareas a un servidor
//Las tareas están agrupadas por etiquetas
//Para añadir una etiquera escribe node cliente nombre_etiqueta put
//Para añadir una tarea en una etiqueta escribe node cliente nombre_etiqueta post nombre_tarea
//Para ver las tareas de una etiqueta escribe node cliente nombre_etiqueta
//Para eliminar una tarea de una etiqueta escribe node cliente delete nombre_tarea
//Para buscar a qué etiqueta pertenece una tarea escribe node cliente nombre_tarea buscar

var rest = require('restler');
var url = 'http://127.0.0.1:8080/tareas/';
var etiqueta = process.argv[2]?process.argv[2]:'';
var accion = process.argv[3]?process.argv[3]:'get';
var tarea = process.argv[4]?process.argv[4]:'';

//Añade una etiqueta a la lista. La etiqueta agrupa tareas que pertenecen a un mismo tipo (universidad, hogar, trabajo...)
if (accion == 'put') {
	rest.put( url + etiqueta).on('complete', function(data) {
		console.log(data);
	});
}
//Escribe una tarea dentro de una etiqueta
if (accion == 'post') {
	rest.post(url + etiqueta+'/'+tarea).on('complete', function(data) {
		console.log(data);
	});
}
//Muestra las tareas de la etiqueta pedida
if (accion == 'get') {
	rest.get(url+etiqueta).on('complete', function(data) {
		for (i=0 ; i<data.length ; i++) {
			console.log(data[i]);
		}
	});
}
//Elimina una tarea de una etiqueta indicada
if (accion == 'delete') {
	rest.del(url + etiqueta+'/'+tarea).on('complete', function(data) {
		console.log(data);
	});
}
//Busca en que etiqueta se encuentra una tarea, suponiendo que no están repetidas
if (accion == 'buscar') {
	rest.get(url + 'search/' + etiqueta).on('complete', function(data) {
		console.log(data);
	});
}