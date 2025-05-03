export function treatStringToJson(rawText) {
    console.log("rawText:   " + rawText);



    try {
        const jsonObject = JSON.parse(rawText);
        return jsonObject;
    } catch (error) {
        return rawText; // Retorna como string se não for JSON válido
    }
}

