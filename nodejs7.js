var hhtp = require('http');
var url = require('url');
var fs = require('fs');
Http.createserver(function(req, res) {
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writehead(404, {'content-type': 'text/html'});
            return res.end("404 not found");
        }
        res.writehead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
        });
    }).listen(8080);
