const openAI = require('openai')
const openai = new openAI({apiKey: process.env.OPEN_API_KEY})

async function getOpenAIText() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are a helpful and concisely assistant that response in spanish.'
            },
            {
                role: 'user',
                content: 'Dónde queda la república argentina?'
            }
        ],
        model: 'gpt-4o-mini'
    })
    console.log(completion.choices[0].message.replaceAll('**', '').replaceAll('##', ''))
}
// Llamar la función getOpenAIText() aquí, y ver respuesta en la ventana Terminal

// GEMINI API


const { GoogleGenerativeAI } = require("@google/generative-ai")
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function getGeminiText() {
    const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})

    const prompt = 'qué otros parámetros puedo configurar en el modelo gemini-1.5-flash, cuando construyo una aplicación node.js, además del modelo a utilizar?'
    console.clear()
    
    // const result = await model.generateContentStream(prompt) // STREAM THE RESPONSE
    // let chunkText = ''
    // for await (const chunk of result.stream) {
    //     chunkText += chunk.text().replaceAll('**', '').replaceAll('##', '')
    //     console.clear()
    //     console.log(chunkText)
    // }

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    console.log(text.replaceAll('**', '').replaceAll('##', ''))
}

// Llamar a la función getGeminiText() aquí, y ver respuesta en la ventana Termina
// getGeminiText()