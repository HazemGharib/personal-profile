/*jshint esversion: 6 */
// Third party packages
const config = require('config');
const colors = require('colors');

function requestLogger(req, res, next) {
    const port = process.env.PORT || config.get('port');

    switch(req.method){
        case "GET":
            console.log(`[${req.method}]`.green);
            break;
        case "POST":
            console.log(`[${req.method}]`.yellow);
            break;
        case "PUT":
            console.log(`[${req.method}]`.cyan);
            break;
        case "DELETE":
            console.log(`[${req.method}]`.red);
            break;
        default:
            console.log(`[${req.method}]`.magenta);
            break;
    }

    switch(res.statusCode){
    case 200:
        console.log(`http://${req.hostname}:${port}${req.url}`,`\t [${res.statusCode}] \n`.green);
        break;
    case 400:
    case 404:
    case 500:
        console.log(`http://${req.hostname}:${port}${req.url}`,`\t [${res.statusCode}] \n`.red);
        break;
    default:
        console.log(`http://${req.hostname}:${port}${req.url}`,`\t [${res.statusCode}] \n`.yellow);
        break;
    }
    next();
}

module.exports = requestLogger;