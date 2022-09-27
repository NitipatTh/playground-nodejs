const express =  require ('express');

const restaurantRouter = require('./src/routes/restaurants');
const base64Router = require('./src/routes/base64');

const logger = require('./src/middleware/logger');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Custom middleware
app.use(logger);

//Routes
app.use('/apis/restaurants', (restaurantRouter));
app.use('/apis/base64', (base64Router));

app.get('/', (req, res) => {
    res.send('<br><br><center><h1>Node Express playground</h1></center><center><h4>Let\'s all make the day count</h4></center>')
})

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening to port 3000');
})