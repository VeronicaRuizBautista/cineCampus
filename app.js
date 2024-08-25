const express = require("express");
const path = require('path')
const app = express();
const router = require('./server/router')

app.use(express.json());

// router.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname, process.env.EXPRESS_STATIC, 'ws.js'));
// });
app.use('/css', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'storage')));


app.use(router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.EXPRESS_STATIC, 'index.html'));
})
app.get('/servicio', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.EXPRESS_STATIC, 'views/pelicula.html'));
})



app.use((req, res, next) => {
    req.__dirname = __dirname;
    next()
}, router);

app.use((req, res)=> {
    res.status(404).json({menssage: "No tiene autorizacion"})
})

let config = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}

app.listen(config, () => {
    console.log(`http://${config.host}:${config.port}`);
})
