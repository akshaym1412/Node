import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("Akshay M")
})
app.listen(8000,()=>{
    console.log("server started ")
});