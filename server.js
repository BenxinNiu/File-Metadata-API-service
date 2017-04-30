const express=require('express');
const Multer=require('multer');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});


const multer=Multer({
  storage:Multer.MemoryStorage,
  limits:{
  fileSize:6*1024*1024
  }
});


app.get('/data',multer.single('file'),(req,res)=>{
var object={
  "file size":req.file.size,
  "mime type"req.file.mimetype
}
});


var server=app.listen(process.env.port||'8080',function(){
  console.log("File metadata service is listenting on port"+server.address().port);
  console.log("ctrl C to stop the server")
})
