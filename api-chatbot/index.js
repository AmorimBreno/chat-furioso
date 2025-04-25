
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Furia Counter Strike ChatBot API")
});

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

app.post('/api/ask-furia', async(req,res)=> {
   
})