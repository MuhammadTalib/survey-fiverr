const express = require('express') 
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/api/user/create',async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({status:true,user,token})
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/api/user/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({status:true,user:user,token})
    }catch(e){
        res.status(400).send();
    }
})

router.post('/api/users/logout',auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(f=>{return(f.token!==req.token)})
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


router.get('/users/:id',async (req,res)=>{
    const _id=req.params.id

    try{
        const user=await User.findById(_id)
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    }catch(e){
        res.status(500).send();
    }
 
    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.status(200).send(user)
    // }).catch(e=>{
    //     res.status(500).send(e)
    // })
    // console.log(req.params)
})
router.post('/api/users/me',auth ,async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    }) 

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Updates!'})
    }

    try{
        updates.forEach((update)=>{
            req.user[update]=req.body[update];
        })
        await req.user.save()
        res.send(req.user)
    }catch(e){
        res.status(500).send()
    }
})

router.delete('/users/me',auth,async(req,res)=>{
    try{
        // const user =await User.findByIdAndDelete(req.user._id);
        // if(!user){
        //     return res.status(404).send()
        // }

        await req.user.remove( )
        res.send(req.user)
    }catch(e){ 
        return res.status(500).send()
    }
})
// const upload = multer({
//     // dest:'avatars',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             return cb(new Error('Please upload an Image'))
//         }
//         cb(undefined,true)


//         // cb(new Error('File must be a pdf'))
//         // cb(undefined,false)

//     }
// })
// router.post('/users/me/avatar',auth, upload.single('avatar'),async (req,res)=>{
   
//     const buffer = await sharp(req.file.buffer).resize({ width:250, height:250}).png().toBuffer() 
//     req.user.avatar = buffer
//     await req.user.save()
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({
//         error:error.message
//     })
// })

// router.delete('/users/me/avatar',auth,async (req,res)=>{
//     req.user.avatar = undefined
//     await req.user.save()
//     res.send()
// })

router.get('/users/:id/avatar', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/png')
        res.send(user.avatar)

    }catch(e){
        res.status(404).send()
    }                     
})

module.exports = router