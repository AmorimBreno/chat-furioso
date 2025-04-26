import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Furia Counter Strike ChatBot API")
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getResponse(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: "system", 
      content: "Você é um ChatBot assistente do time de Counter Strike da Furia."
    }, { 
      role: "user", 
      content: input 
    }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}

app.post('/ask-furia', async(req,res)=> {
    try {
        const { question } = req.body;
        if (!question) {
            return res.status(400).json({ error: "Por favor, forneça uma pergunta" });
        }
        console.log(question);
        const response = await getResponse(question);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao processar sua pergunta" });
    }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});