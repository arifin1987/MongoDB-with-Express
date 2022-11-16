const express = require('express');
const studentRouter = require('./routers/studentRouter')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my-student-2',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=>console.log("mongodb connected successfully"))
.catch(err=>console.log("connection failed"))
app.use(express.json());

app.use('/api/students/', studentRouter);


const port =3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})