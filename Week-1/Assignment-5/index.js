const express = require('express')
const app = express()
const port = 3000

app.get('/data', (req, res) => {
    let number = req.query.number
    if (number == undefined){
        res.send('Lack of Parameter')
    } else if (isNaN(number)) {
        res.send('Wrong Parameter')
    } else {
        number = parseInt(number)
        let ans = (number*(number+1))/2
        res.send(ans.toString())
    }
    
})

app.listen(port, () => {
  console.log(`Assignment 5 listening on port ${port}`)
})