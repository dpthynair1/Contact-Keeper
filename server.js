const express = require('express')
const app = express()


app.get('/', (req,res) => res.json({msg: 'Welcome to the contact keeper API ...'}))
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>  console.log(`Server up on port ${PORT}` ))