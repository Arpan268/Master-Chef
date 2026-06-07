import './form.css'

export default function Form ({submit}) {
    return (
        <form className="form" action={submit}>
                <label className='form-label' htmlFor='input'>Tell the Master Chef what you have:</label>
                <div className='input-area'>
                    <input
                        id='input'
                        aria-label='Add Ingredient'
                        type="text"
                        placeholder="Ingredient..."
                        className="form-input"
                        name='ingredient'
                    />
                    <button className="form-btn">+ Add Ingredient</button>
                </div>
            </form>
    )
}