// component
const IngredientList = (props) => {
    const ingredients = props.ingredients
    const addToBurger = props.addToBurger
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li style={{backgroundColor: ingredient.color}} key={index}>
                    {ingredient.name}
                    <button onClick={() => addToBurger({ name: ingredient.name, color: ingredient.color})} style={{backgroundColor: "black", color: "white"}}>+</button>
                </li>
            ))}
        </ul>
    )
}

// export
export default IngredientList