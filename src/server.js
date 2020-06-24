const routes = require('./routes')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://mongodbvit:mongodbvit@vitoriaapp-k2emg.mongodb.net/vitoriapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(routes)
app.listen(process.env.PORT || 3000);
