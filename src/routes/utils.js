const express =  require ('express');
const dayjs = require('dayjs')
const router = express.Router();
const _ = require('lodash');

router.get('/blockDate/:currentBlock', (req, res) => {
    const blockNumber = Number.parseInt(req.params.currentBlock, 10);
    const inputDate = dayjs(req.query.date);
    const currentDate = dayjs();
    const diffHour = currentDate.diff(inputDate, 'hour')
    const blockDate = blockNumber - (diffHour * 3600 / 3);
    res.json({ data: { blockDate: blockDate, date: dayjs(inputDate).locale('th').format() } });
})

module.exports = router;