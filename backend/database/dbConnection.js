import mongoose  from "mongoose";

 export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "RESTAURANT"
    })
    .then(()=>{
        console.log('Connected to Database successfully ! ');
    })
    .catch((err)=>{
        console.log(`Some Error occured while connecting to Database : ${err}`)
    });
};