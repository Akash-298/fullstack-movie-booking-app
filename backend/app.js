import  express  from "express";
const app = express();



app.use("/", (req,res,next)=>{
    res.send("h");
});


 app.listen(5000, () =>{
      console.log("Connected To Database And Server is running")
     } )
  