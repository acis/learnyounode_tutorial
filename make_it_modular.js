var dirFilter = require('./directoryFilter.js');

dirFilter(process.argv[2], process.argv[3], function(err, data){
	if(err){
		return console.log(err);
	}

	data.forEach(function(item){
		console.log(item);
	});


})
