//Programa en node.js que consume la interfaz REST de IMDB.
//Busca una pelicula por su id de IMDB y muestra datos extraidos de la interfaz REST

var http = require('http');

var options = {
    host: 'www.omdbapi.com',
    path: '/?i=tt0046521&plot=full&r=json', //el id requerido es tt0046521
    method: 'GET'
};

var dataJSON = ""; //variable intermedia donde iremos almacenando los datos en JSON descargados
var req = http.request(options, function(res) {
			   res.setEncoding('utf8');
			   //Cada vez que se reciba un nuevo pedazo de datos lo almacenamos
			   res.on('data', function (datos_JSON) {
			   		dataJSON+= datos_JSON; 
			    });
			   //Cuando ya tenemos todos los datos recibidos trabajamos con ellos
			   res.on('end', function () {
			   		datos = JSON.parse(dataJSON);
			   		console.log('Titulo: ' + datos.Title + "\nAño: " + datos.Year + "\nDirector: " + datos.Director + '\nPaís: ' + datos.Country + 
				      	'\nIdioma: ' + datos.Language + '\nArgumento: ' + datos.Plot);
			   });
		   });

req.end();
