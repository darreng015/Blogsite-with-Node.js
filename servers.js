const http= require('http');
const fs = require('fs');
const _ = require('lodash');

const server= http.createServer((req,res) => {
    console.log(req.url, req.method);

    //lodash
    const num = _.random(12, 36);
    console.log(num);

    //runs only once
    const greet = _.once(() => {
        console.log("Greetings");
    });
    greet();
    greet();

    res.setHeader('Content-Type', 'text/html');
    
    // res.write('<head>Creating a site</head>')
    // res.write('<h1>Server is on</h1>');
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.setHeader('Location', '/about');
            res.statusCode=301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode=404;
            break;
    }
    //sending html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening');
})
 
