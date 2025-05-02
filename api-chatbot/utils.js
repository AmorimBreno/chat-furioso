import { MessageTypeEnum } from "./messageTypeEnum";

export function treatStringToJson(rawText) {
    console.log("rawText:   " + rawText);

    const jsonObject = JSON.parse( rawText )

    return jsonObject
}

