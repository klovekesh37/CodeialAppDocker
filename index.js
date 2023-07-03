const express=require('express');
const app=express();
const port=8445

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on ${port}`);
})