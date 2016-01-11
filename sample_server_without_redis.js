var config = require('./config');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moniker = require('moniker');
var exphbs = require('express-handlebars');

// Use Moniker to generate random chat aliases
var names = moniker.generator([moniker.adjective, moniker.noun]);

// Setup Express to use the Handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Process requests for /
app.get('/', function(req, res) {
    // Assign a sample nickname
    var data = {
      sample_nickname: moniker.choose()
    }
    res.render('index', data);
});

// Handle websocket connections
io.on('connection', function(socket) {
    console.log("A user has connected.");
    
    socket.on('disconnect', function() {
        console.log("A user has dropped.");        
    });
    
    // Handle a chat message being sent from the client to the WSS (web socker server)
    socket.on('chat message', function(msg) {
        // Add Azure Web App Instance ID to message for debugging
        msg.sourceInstanceId = config.server.id;
        
        // Send message to socket clients
        io.emit('chat message', msg);
    });
})

http.listen(config.server.port, function () {
    console.log("Listening on *." + config.server.port)
});