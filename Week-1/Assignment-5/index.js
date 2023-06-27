const express = require('express')
const app = express()
const port = 3000

app.get('/data', (req, res) => {
    const number = req.query.number
    if (number == undefined){
        res.send('Lack of Parameter')
    } else if (isNaN(number)) {
        res.send('Wrong Parameter')
    } else {
        let ans = 0
        for(let i = 1 ; i <= number ; i++){
            ans += i
        }
        res.send(ans.toString())
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})