const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendor');

const auth = require('../middleware/auth')
const pauth = require('../middleware/productauth')
const {check} = require('express-validator')



router.post('/store',[auth,[
    check('storeName',"Enter your store name").notEmpty(),
    check('category',"Enter your store category").notEmpty(),


]],vendorController.addstore);



router.get('/store',auth,vendorController.getallstore);
router.put('/store/:id',auth,vendorController.updatestore);
router.delete('/store/:id',auth,vendorController.deletestore);


// add products
router.post('/store/:storeId', pauth, vendorController.addProduct);
router.get('/store/:storeId', pauth, vendorController.getallProduct);
router.put('/store/:storeId', pauth, vendorController.updateProduct);
router.delete('/store/:storeId', pauth, vendorController.deleteProduct);





module.exports = router;