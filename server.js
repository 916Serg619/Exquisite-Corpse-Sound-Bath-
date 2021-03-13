const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const tracksRoutes = require('./routes/tracks.routes');
const app = express();

app.use(cors());
app.use(morgan('dev'));

// routes
app.use(tracksRoutes);

app.listen(3001);
console.log('Server on port', 3001);