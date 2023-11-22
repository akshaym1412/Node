import mongoose from "mongoose";

const connection=(async(URL)=>{
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log("Database Connected");
    }
    catch(err){
        console.log(err)}
        

})

export default connection;