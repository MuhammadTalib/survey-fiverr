const express = require('express') 
const Survey = require('../models/survey')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/api/survey/create',async (req,res)=>{
    const survey = new Survey(req.body)
    console.log("surveey",survey)
    try{
        await survey.save();
        res.status(201).send({status:true,survey})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/survey/:id?',async (req,res)=>{
    const query = {"createdBy._id":req.params.id}
    try{
        await Survey.find(query)
        res.status(201).send({status:true,survey})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router