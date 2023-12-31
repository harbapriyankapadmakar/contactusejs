const path = require('path');

const express = require('express');

const productsController=require('../controllers/products');
const contactusController=require('../controllers/contactus');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct );

router.get('/contactus', contactusController.getAddcontactus );

// /admin/add-product => POST
router.post('/contactus', contactusController.postAddcontactus );

module.exports = router;