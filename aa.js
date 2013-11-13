var http = require('http'),
    url = require('url'),
    fs = require('fs');
 
var PORT = 9000;
 
http.createServer(function(req,res){
    var pathname = __dirname + url.parse(req.url).pathname;
    fs.exists(pathname, function(exists){
    	if(!exists){
    	  res.writeHead(200, {"Content-Type": "text/plain"});
    	  res.write('ajax successsads !');
    	  res.end();
          return;
        }   		        
	res.writeHead(200,{"Content-Type": 'text/html'});	
	fileSteam = fs.createReadStream(pathname);
	fileSteam.pipe(res);    				
    });	
}).listen(PORT);

