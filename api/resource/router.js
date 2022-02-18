// build your `/api/resources` router here
const express = require('express');
 const router = express.Router()

 router.use('*', (req, res)=>{
     res.json({api:'up'})
 })

 // eslint-disable-next-line no-unused-vars
 router.use((err, req, res, next)=>{
     res.status(500).json({
         customMessage: "Something inside the recipes router went wrong",
         message: err.message,
         stack: err.stack,
     })
 })

 module.exports = router;