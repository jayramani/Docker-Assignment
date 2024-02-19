const express = require('express');
const app = express();
const fs = require('fs')
const crypto = require('crypto');

app.use(express.json());

app.post('/checksumcounter',(req,res)=>{

    const fileData = req.body.file
    const filePath = "../" + fileData;;

    function generateChecksum(str, algorithm, encoding) {
        return crypto
            .createHash(algorithm || 'md5')
            .update(str, 'utf8')
            .digest(encoding || 'hex');
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err)
            {
                console.log('Somethinfg went wrong.');
                console.log('Error: ' + err);
            }
        else
            {
                var checksum = generateChecksum(data);
                res.json({
                    "file": fileData,
                    "checksum": checksum  
                });
            }
        });
})

app.listen(5001);