const express = require('express') 
const Survey = require('../models/survey')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/api/survey/create',auth,async (req,res)=>{
    const survey = new Survey(req.body)
    try{
        await survey.save();
        res.status(201).send({status:true,survey})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/user/survey/:id?/:limit?/:skip?',auth,async (req,res)=>{
    const query = {"createdBy._id":req.params.id}
    try{
        let survey= await Survey.find({"createdBy._id":req.params.id})
        const count = await Survey.count(query)
        res.status(201).send({status:true,survey,count})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/survey/getAll/:limit?/:skip?', async (req,res)=>{
    try{
        const surveys = await Survey.find({$and:[{startDate:{$lte:new Date()}},{endDate:{$gte:new Date()}}]}, null, {})
        const count = await Survey.count({})
        res.status(201).send({status:true,surveys,count})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router