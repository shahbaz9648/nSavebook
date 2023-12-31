const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

connectToMongo();

app.use(cors())

// middleware for using req.body
app.use(express.json())

// Available Routes 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`nSavebook backend listening at http://localhost:${port}`)
})