const express = require('express');
const shoeController = require('../controllers/shoeController');

const router = express.Router();

router.get('/shoes', shoeController.getShoes);
router.get('/shoes', shoeController.viewShoe);
router.post('/shoes', shoeController.addShoe);
router.put('/shoes:id',shoeController.updateShoe)
router.delete('/shoe:id',shoeController.deleteShoe)

module.exports = router;