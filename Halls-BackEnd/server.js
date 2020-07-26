const express = require('express');
const os = require('os');
const v8 = require('v8');

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);