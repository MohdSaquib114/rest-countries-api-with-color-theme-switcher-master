const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { dirname } = require('path')
const app = express()
const data = fs.readFileSync('./Data/data.json',
{encoding:'utf8', flag:'r'});
app.use(cors())
app.get('/v1/api/countries', (req,res)=>{
res.json(data)
} )

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))