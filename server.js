const express=require('express');
const mongoose  = require('mongoose');
const app=express ();
app.use(express.json())
const port=5000;
require('dotenv').config({ path:'./.env'});


// connect database
mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
.then((res) => console.log('database connected'))
.catch((err) => console.log(err));



//Routes
app.use('/persons', require('./Routes/personRoutes'))



//create server
app.listen(5000,(err)=>{
    err? console.log(err) : console.log(`Server running at:http://localhost:${port}/`)
});