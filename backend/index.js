const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const DB = 'mongodb+srv://sadhak2003:kumarandsons@cluster0.y3qk1sm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection successful")
}).catch((err) => console.log("not connected"));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const User = new mongoose.model('USER',userSchema)

const jobSchema = new mongoose.Schema({
    title: String,
    location: String,
    lowerboundsalary: Number,
    upperboundsalary: Number,
    type: String,
    qualifications: String,
    description: String
})

const Job = new mongoose.model('JOB',jobSchema)



app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.post("/login", (req,res)=>{
    const {email,password} = req.body

    // User.findOne({email: email},(err,user)=>{
    //     if(user){
    //         if(password === user.password){
    //             res.send({message:"login successful", user: user})
    //             console.log("nice user")

    //         }else{
    //             res.send({message: "invalid credentials"})
    //         }
    //     }else{
    //         res.send({message:"user not registered!"})
    //         console.log("no  user found")
    //     }
    // })

    User.findOne({email: email})
    .then((user) =>{
        if(!user){
            res.send({message:"user not registered!"})
            console.log("no user found")
        }
        else if(password === user.password){
            res.send({message:"login successful", user: user})
            console.log("nice user")
        }else{
            res.send({message: "invalid credentials"})
        }
    })
})

app.post("/register", (req,res)=>{
    const {name,email,password} = req.body

    User.findOne({email: email})
    .then((user)=>{
        if(user){
            res.send("user alresdy registered")
        }else{
            const user = new User({
                name,
                email,
                password
            })
            // user.save(err =>{
            //     if(err){
            //         res.send(err)
            //     }else{
            //         res.send({message: "successfully registered"})
            //     }
            // })
            user.save().then(()=>{
                res.send({message: "successfully registered"})
            }).catch((err) =>{
                res.send(err)
            })
        }
    })
})

app.post("/admin", (req,res)=>{
    const {title,location,lowerboundsalary,upperboundsalary,type,qualifications,description} = req.body

    const job = new Job({
        title,
        location,
        lowerboundsalary,
        upperboundsalary,
        type,
        qualifications,
        description
    })

    job.save().then(()=>{
        res.send({message:"JOB added successfully!!"})
    }).catch((err) =>{
        res.send(err)
    })
})

app.get("/career",(req,res)=>{
 
    Job.find()
    .then((job)=>{
        res.send(job)
    })
})
  
app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})
