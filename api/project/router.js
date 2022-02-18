// build your `/api/projects` router here
const express = require('express');
 const router = express.Router()
 const Project = require('./model')

 router.get('/projects', (req,res,next)=>{
    Project.getProjects()
      .then(projects => {
        if(!projects){
          res.status(200).json([])}
        else{
          res.status(200).json(projects)
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