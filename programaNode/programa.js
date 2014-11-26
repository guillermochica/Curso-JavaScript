//Lectura de un fichero en node

fs = require('fs');
var file = 'texto.datos';
fs.readFile(file, 'utf8',
	function (err, data) {
		if(err) {return console.log(err);}
		console.log(data);
	});