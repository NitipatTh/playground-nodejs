const express =  require ('express');
const router = express.Router();
const base64 = require('base-64');
const _ = require('lodash');

router.post('/', (req, res) => {
    const body = req.body;
    if (_.isNil(body.input)) {
        res.sendStatus(400);
    }
    const encoded = base64.encode(body.input);
    res.json({ input: body.string, base64: encoded });

});

module.exports = router;