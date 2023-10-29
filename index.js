const express = require ('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001

app.get('/' ,(req , res) => {
   res.json(('https://api.github.com/users/puneet1420'))
})

app.listen(port , () => { console.log(`server is running on http://localhost ${port}`)})