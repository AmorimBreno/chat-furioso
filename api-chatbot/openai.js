import OpenAI from "openai";
import dotenv from "dotenv";
import { baseSearchNextMatchPrompt, baseSearchPreviousMatchPrompt, baseInstructions } from "./baseInstructions.js";
import { treatStringToJson } from "./utils.js";

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });



export async function getResponse(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: "system", 
      content: baseInstructions
    }, { 
      role: "user", 
      content: input 
    }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}

export async function searchWeb(category)  {

  let searchQuery = "";
  let messageType = "TEXT"
 
  console.log("[INFO] Category: " + category);

  if (category === "[PREVMATCH]") {
      searchQuery = baseSearchPreviousMatchPrompt;
      messageType = "PREVMATCH"

  } else if (category === "[NEXTMATCH]") {
      searchQuery = baseSearchNextMatchPrompt;
      messageType = "NEXTMATCH"
  } else if (category === "[PLAYERS]"){
      messageType = "PLAYERS"
      return { "response": "" ,"messageType" : messageType };
  } else {
    messageType = "TEXT"
    return { "response": category ,"messageType" : messageType };
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-search-preview",
    web_search_options: {},
    messages: [{
        "role": "user",
        "content": searchQuery
    }],
});
    const jsonResponse = treatStringToJson(completion.choices[0].message.content);

    if (typeof jsonResponse === "object" ) {
      jsonResponse["messageType"] = messageType
      return jsonResponse;
    } else {
      jsonResponse = {
        response: jsonResponse,
        messsageType: "TEXT"
      }
      return jsonResponse
    }
}