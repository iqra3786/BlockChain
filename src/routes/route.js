const express = require('express')
const router = express.Router();

const blockController=require('../controllers/blockController')

router.get('/cryptoCoins',blockController.getBlockData)











router.all('/*', function (req, res) {
    return res.status(400).send({ status: false, msg: "Please give right path" })
})

module.exports = router