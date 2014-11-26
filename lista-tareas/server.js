//Servidor REST para hacer listas, por ejemplo, listas de tareas

var express = require('express');
var app = express();
var port = process.argv[2]?process.argv[2]:'8080';

var tareas = new Array;
var buscar = new Array; //Vector para facilitar la busqueda de etiquetas a partir de una tarea contenida en esa etiqueta
						//La etiqueta de una tarea estará siempre en el indice superior a la tarea de ese vector

app.get('/', function (req, res) {
	res.send('Lista de tareas à faire');
});

app.get('/tareas/:id', function (req, res) {
	
	res.send(tareas[req.params.id]);
});

app.put('/tareas/:id', function (req, res) {  //etiqueta: universidad, casa, trabajo...
	tareas[req.params.id] = new Array;
	res.send('Etiqueta ' + req.params.id + ' creada.');
	 
});

app.post('/tareas/:id/:tareas', function (req, res) {   
    tareas[req.params.id].push(req.params.tareas);
    buscar.push(req.params.tareas);
    buscar.push(req.params.id);
    res.send( 'Posted ' + req.params.tareas + ' en ' + req.params.id );
});

app.delete('/tareas/:id/:tareas', function (req, res) {  
	var index = tareas[req.params.id].indexOf(req.params.tareas); 
    tareas[req.params.id].splice(index,1);
    buscar.splice(index,2);

    res.send( 'Deleted ' + req.params.tareas + ' de ' + req.params.id );
});

app.get('/tareas/search/:tarea', function (req, res) {

	var index = buscar.indexOf(req.params.tarea) + 1;
	if (index != 0) { //La tarea existe
		res.send('La tarea ' + req.params.tarea + ' se encuentra en la etiqueta ' + buscar[index]);
	}
	else{res.send('Esa tarea no existe');}

});

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port);