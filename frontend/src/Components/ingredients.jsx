import './ingredients.css'

export default function Ingredients({ ingredients, getRecipe }) {

    const ingredientList = ingredients.map(item => {
        return (
            <li key={item}>{item}</li>
        )
    })

    return (
        <>
            {ingredients.length > 0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list">
                    {ingredientList}
                </ul>

                {ingredients.length > 3 ? <div className='get-recipe-container'>
                    <div>
                        <h3 className='recipe-msg'>Ready for a recipe?</h3>
                        <p>Generate a recipe from the list of your ingredients.</p>
                    </div>
                    <button className='get-recipe-btn' onClick={getRecipe}>Get a recipe</button>
                </div> :
                    <div className='get-recipe-container'>
                        <h3>Add atleast 4 ingredients to generate a recipe.</h3>
                    </div>}

            </section> :
                <section>
                    <h2>No ingredients added yet.</h2>
                </section>}
        </>
    )
}