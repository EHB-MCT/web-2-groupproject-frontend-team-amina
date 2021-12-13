//Getting the data

const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'))


app.get('/', (req, res, next) => {
    res.status(200).redirect('index.html');
})

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`)
  })

  
//course: "the course this challenge belongs to"
//name: "this is the name of the challenge"
// points:: 10
// _id: "61a5e59ae914551c72ef204b"