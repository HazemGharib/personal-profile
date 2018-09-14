/*jshint esversion: 6 */

// Express
const express = require('express');
const path = require('path');
const app = express();

// Third party packages
const helmet = require('helmet');
const cJson = require('circular-json');
const favicon = require('serve-favicon');
//const history = require('connect-history-api-fallback');
const cors = require('cors');
const config = require('config');

// Custom middlewares
const notFoundHandler = require('./utils/404-handler');
const requestLogger = require('./utils/request-logger');

// Routers
const portfolio = require('./routes/portfolio');

// Setting view engine
// app.set('view engine','pug');
// app.set('views', './views');

/* Configuring Helmet, History Api Fallback, Request Body JSON, CORS, Favicon & Static folders */
if(process.env.NODE_ENV == 'production' && app.get('env') == 'production')
{
    // Helmet Configuration
    app.use(helmet());

    // Angular 2+ integration for fallback issue
    // app.use(history({verbose: true}));
}
app.use(express.json());
app.use(cors());
app.use(favicon(path.join(__dirname,'public', 'img', 'favicon.ico')));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname,'..','..','..','dist','portfolio')));
/* Configuring End */

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', config.get('baseUri'));

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/* Application Routes */
app.use('/api/portfolio', portfolio);
/* Routes End */

/* Path Location Strategy */
if(process.env.NODE_ENV == 'production' && app.get('env') == 'production'){
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname,'..','..','..','dist','portfolio','index.html'));
    });
}
/* */

/* Application Handlers */
app.use(notFoundHandler);
app.use(requestLogger);
/* Handlers End */

// PORT configuration and server starting
const port = process.env.PORT || config.get('port');

app.listen(port, () => {
    console.log(`[Portfolio Server - ${app.get('env')} instance] is listening on http://localhost:${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.