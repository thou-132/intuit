const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/register', (req, res)=>{
   

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{

        }
        FormDataModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    })

})

app.post('/login', (req, res)=>{
   
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
         
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
       
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("sever is running");

});