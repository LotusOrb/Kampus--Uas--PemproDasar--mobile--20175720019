const express = require('express');
const app = express();
const datapay = require('./asData')


// Route For public asset
app.use('/public',express.static('public'))


// route for get all
app.get('/dart',(req,res)=>{
    res.json({result:datapay.allData()})
})

// route for get one
app.get('/:ID',(req,res)=>{
    req.params.ID = parseInt(req.params.ID)
    res.json(datapay.oneData(req.params.ID))
})

app.listen(3001)