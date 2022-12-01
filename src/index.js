const express = require('express');
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products');


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
    }
);


app.use(productsRoutes);
const PORT = process.env.PORT || 5000;

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.SECRET_DB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error.message);
    }
}
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
    connectToDB();
}
);
