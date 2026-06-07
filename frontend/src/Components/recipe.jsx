import ReactMarkdown from 'react-markdown'
import './recipe.css'

export default function Recipe({ recipe }) {
    return (
        <section className='recipe'>
            {recipe && <h2 className='suggested-recipe'>Suggested Recipe:</h2>}
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}