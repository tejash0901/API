require('dotenv').config();
const uri=process.env.MONGODB_URI;
const express=require("express")
const app = express();
const Song=require("./models/songsModel")
const mongoose=require("mongoose")



app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello API')
})

app.get('/hello',(req,res)=>{
    res.send("hi from hello")
})


app.get('/songs',async(req,res)=>{
    try {
        const songs=await Song.find({})
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


app.post('/songs',async(req,res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try {
        const song=await Song.create(req.body)
        res.status(200).json(song)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

mongoose
    .connect('process.env.MONGODB_URI')
    .then(()=>{console.log("Successfully connected")
        app.listen(3000,()=>{
            console.log("node API on 3000")
        })
    })
    .catch(()=>{
        console.log(`error`)
    })

