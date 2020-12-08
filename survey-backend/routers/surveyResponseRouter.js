const express = require('express') 
const router = new express.Router()
const auth = require('../middleware/auth')
const SurveyResponse = require('../models/surveyResponse')

router.post('/api/surveyResponse/save',auth,async (req,res)=>{
    delete req.body._id
    const surveyres = new SurveyResponse(req.body)
    try{
        await surveyres.save();
        res.status(201).send({status:true,surveyres})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/surveyResponse/getFromSurveyID/:id',auth,async (req,res)=>{
    const query = { surveyID : req.params.id}

    try{
        const survey = await SurveyResponse.find(query);
        res.status(201).send({status:true,survey})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router