const express =  require ('express');
const router = express.Router();

const restaurants = require('../data')

let currentRestaurantId = 9;

router.get('/', (req, res) => {
    res.json(restaurants);
})

router.get('/:id', (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurant = restaurants.find((r) => r.id === restaurantId);
    res.json(restaurant);
})

router.post('/', (req, res) => {
    currentRestaurantId += 1;
    const newRestaurant = {
        id : currentRestaurantId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);

});

router.put('/:id', (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((r) => r.id === restaurantId);
    const updatedRestaurant = {
        id: restaurantId,
        ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
});

router.delete('/:id', (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((r) => r.id === restaurantId);
    restaurants.splice(restaurantIndex, 1);
    
    res.status(200);
    res.send({message: `delete restaurant id: ${req.params.id} success`});
    // res.status(204);
});

module.exports = router;