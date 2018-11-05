const EventEmitter = require('events');
const readline = require('readline');
require('../drowsy-dev-helpers').helpers();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', response => {
    getCliPrompt(response);
});

rl.on('line', input => {
    // Every time client reads a line, it will emit the data to the server
    client.emit('command', input);
});