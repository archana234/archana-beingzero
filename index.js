const express = require('express')
const app = express()
const port = 3000
//this line tells express to serve
//js or css files from frontend folder
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
var student={"name" : "Being zero","clg":"VNRVJIET","regno":"1123"

}

app.get('/data',(req,res)=> res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
