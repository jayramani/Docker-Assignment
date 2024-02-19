const express = require('express');
const app = express();
const fs = require('fs')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));



app.use(express.json());

app.post('/checksum',(req,res)=>
{
    const fileData = req.body.file
    const filePath = "../" + fileData;

    fs.readFile(filePath,'utf-8',(err,data) => {

        if(fileData.trim() == ""){
            res.json({
                file: null,
                error: "Invalid JSON input."
            })
        }
        else if(!fs.existsSync(filePath.trim())){
            res.json({
                    file: fileData,
                    error: "File not found."
                    }
            )
        }else{
            console.log('file found');
    
            const url = 'http://container2:5001/checksumcounter'
            const option = {
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "file" : fileData 
                })
            };
            fetch(url,option).then((response) => response.json()).then((data) => res.json(data)); 
        }
    }); 
})

app.listen(5000);