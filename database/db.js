import mongoose from "mongoose";

const connection=(async(URL)=>{
    const URL={URL};
    try{
        await mongoose.connect(URL)
        console.log("Database Connected");
    }
    catch(err){
        console.log(err)}
        

})

export default connection;