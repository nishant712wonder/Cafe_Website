const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/first",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Successfull`);
}).catch((e)=>{
    console.log(`NOT Successfull`);
})