const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const  app = express();

app.use(morgan('short'));

app.use(express.static(path.join(__dirname,'static')));

// app.use((req,res,next)=>{
//       console.log('Second Middleware');
//       let filePath = path.join(__dirname,'static',req.url);
//       fs.stat(filePath, (err, fileInfo)=>{
//             if(err) {
//                   next();
//                   return;
//             }
//             if(fileInfo.isFile()) {
//                   res.sendFile(filePath);
//             }  else {
//                   next();
//             }
//       })
// })

app.use((req,res)=>{
      console.log('Last Middleware');
      res.status(404).send("404 Not Found!");
})

app.listen(3000,()=>{
      console.log('Server running  at http://localhost:3000...');
})