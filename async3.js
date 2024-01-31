function getfile(mycallback) {
    let req = new xmlhttpRequest();
    req.open('GET' , "mycar.html");
    req.onload = function() {
    if (req.status == 200) {
    mycallback(req.responseText);
    } else {
    myCallback("error: " + req.status);
    }
    }
    req.send();
    }
    getfile(myDisplayer)