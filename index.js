import express from 'express';
import cors from 'cors'

import mongoose from 'mongoose';

import Router from './Router/auth.js'


const app = express();

const Port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api',Router);




app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
})



const Connection = async(options)=>{
    try {
        
        await mongoose.connect('mongodb+srv://collegebackend:1VCFU0C9vNsdJOlZ@clustor0.0cp1v9z.mongodb.net/?retryWrites=true&w=majority' ).then(
            console.log("Successfully connected to the database")
            )
           
    } catch (error) {
        console.log("could not to the database",error)
       
        
    }
    
}

Connection();
