// build your `/api/resources` router here
const express = require('express');
const router = express.Router()
const Resource = require('./model')

router.get('/', (req,res,next)=>{
    Resource.getResource()
    .then(resources => {
        if(!resources){
          res.status(200).json([])}
        else{
          res.status(200).json(resources)
        }
    })
    .catch(next)
})

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