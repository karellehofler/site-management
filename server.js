const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

