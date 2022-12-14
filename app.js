const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );


app.get('/carrito.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000')
});