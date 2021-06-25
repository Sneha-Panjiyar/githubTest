const express =require('express');
const router =express.Router();

const Student=require('../models/student.js');

//api
router.post('/',(req,res)=>{
    let stu= new Student({
        name :req.body.name,
        age:req.body.age,
        address:req.body.address
    });
    stu.save( (err, doc)=> {
        if(err){
            
        }
    })

})

module.exports=router;