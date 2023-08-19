const path=require('path');
const express=require(`express`);

const contactusController=require('../controllers/contactus');

const router=express.Router();

router.get('/admin/contactus', contactusController.getAddcontactus);
router.post('/admin/contactus', contactusController.postAddcontactus );  
module.exports=router;