// Create web server
// 1. Load the express module
// 2. Create an instance of express
// 3. Define routes
// 4. Start the server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');
const fs = require('fs');
const path = require('path');
const port = 3000;