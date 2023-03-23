const express=require('express');
const  Records  = require('../controller/records');
const router=express.Router();


router.get('/records',Records.Records)
router.get('/managed-records',Records.Managed_records)
 

module.exports=router;