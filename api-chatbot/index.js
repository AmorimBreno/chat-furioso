
import express from "express";
import cors from "cors";
import { getResponse, searchWeb } from "./openai.js";


const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Furia Counter Strike ChatBot API")
});

app.post('/ask-furia', async(req,res)=> {
    try {
        const { question } = req.body;
        
        if (!question) {
            return res.status(400).json({ error: "Por favor, forneça uma pergunta" });
        }
        console.log(question);

        const response = await getResponse(question);


        const jsonResponse = await searchWeb(response)
        console.log("jsonResponse: "+  jsonResponse)
        
        res.json(jsonResponse);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao processar sua pergunta" });
    }

})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});