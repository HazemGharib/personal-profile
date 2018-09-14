/*jshint esversion: 6 */

// Third party packages
const config = require('config');

function notFoundHandler(req, res, next){
    //setTimeout(()=>{
        const port = process.env.PORT || config.get('port');
        if(!res.headersSent)
        res.status(404).send(
            `No handler found for this request:`+
            `\r\n[${req.method}]`+
            `\r\nhttp://${req.hostname}:${port}${req.url}`);
    next();
    //},10);
}

module.exports = notFoundHandler;