const express = require("express");



const app = express();

app.use(express.json());


app.use((req, res, next)=>{
    console.log("Medilware start...");
    // console.log(req.body)
    if(typeof(req.body)=="object"){
        const {ID, Name, Rating, Description, Genre, Cast} = req.body;

        const errors = [];
        if (typeof ID !== "number") errors.push("ID must be a number");
        if (typeof Name !== "string") errors.push("ID must be a string");
        if (typeof Rating !== "number") errors.push("ID must be a number");
        if (typeof Description !== "string") errors.push("ID must be a string");
        if (typeof Genre !== "string") errors.push("ID must be a string");
        if (!Array.isArray(Cast) || !Cast.every((itm)=>{
            if(typeof itm == "string"){
                return true;
            }
        })){
             errors.push("Cast must be an array of strings");
        }

        if(errors.length>0){
            res.status(400).json({data:"invalid request body.", message:"bad request some data are incurrect", errors})
        }

    }
    next();
    console.log("Medilware End...")
})


app.post("/", (req, res)=>{
    res.send("data received")
})



app.listen(8080, ()=>{
    console.log("Server is listening...");
})


  