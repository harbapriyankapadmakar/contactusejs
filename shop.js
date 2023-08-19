const path = require('path');

const express = require('express');

const productsController=require('../controllers/products');
const contactusController=require('../controllers/contactus');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/', contactusController.getcontactus);

module.exports = router;
