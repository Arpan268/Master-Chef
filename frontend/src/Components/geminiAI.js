import { GoogleGenerativeAI } from '@google/generative-ai'

const geminiapi = import.meta.env.VITE_GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(geminiapi)

export async function generateRecipe(data) {

    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstructions: "You are a master chef who makes delicious dishes and shares the recipe.",
        temperature: 0.5
    })

    const prompt = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they
mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page

ACTUAL LIST OF INGREDIENTS:
${data}`

    try {

        const result = await model.generateContent(prompt);
        const response = result.response
        const recipe = response.text()
        return recipe
    }

    catch (error) {
        console.error('Error generating recipe:', error);
        return 'Sorry, there was an error generating the recipe. Please try again later.'
    }
}