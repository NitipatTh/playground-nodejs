const express =  require ('express');

const restaurantRouter = require('./routes/restaurants');

const logger = require('./middleware/logger');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Custom middleware
app.use(logger);

//Routes
app.use('/apis/restaurants', (restaurantRouter));

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})