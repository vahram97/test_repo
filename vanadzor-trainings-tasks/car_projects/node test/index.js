const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const PORT = 55555;

let cars = [
    { 'vin': 123, 'color': 'green' },
    { 'vin': 456, 'color': 'red' },
    { 'vin': 789, 'color': 'blue' },
    { 'vin': 111, 'color': 'red' },
];

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/main',(req,res)=>{
    res.sendFile(__dirname+"/main.html");
});

app.get('/cars', (req, res) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    res.send(cars);
});

app.get('/search',(req,res)=>{
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    const car = cars.filter((item) => item.vin == req.query.vin && item.color == req.query.color);
    res.send(car);
});

app.get('/add', (req, res) => {
    cars.push(req.query);
    // console.log(cars);
    // res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});