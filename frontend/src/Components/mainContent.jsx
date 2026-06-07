import React from 'react'
import './mainContent.css'
import Form from './form'
import Ingredients from './ingredients'
import { generateRecipe } from './geminiAI'
import Recipe from './recipe'

export default function MainContent() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState('')

    /*  This is the old way of handling forms using onSubmit

    function handleSubmit(e) {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)      //formData is an array of arrays, where each array is a key-value pair of the form data. The key is the name of the input field and the value is the value of the input field.
          const newIngredient = formData.get('ingredient')
          if (newIngredient) {
              setIngredients(prev => [...prev, newIngredient])
          }
          e.currentTarget.reset()
      }   
    */

    async function getRecipe() {
        setRecipe('Generating recipe...')
        const recipe = await generateRecipe(ingredients.join(', '))
        setRecipe(recipe)
    }

    function handleSubmit(formData) {
        const newIngredient = formData.get('ingredient')
        if (newIngredient) {
            setIngredients(prev => [...prev, newIngredient])
        }
    }

    return (
        <main>
            <Form submit={handleSubmit} />

            <Ingredients ingredients={ingredients} getRecipe={getRecipe} />

            {recipe && <Recipe recipe={recipe} />}

        </main>
    )
}