// component
const BurgerStack = (props) => {
    const stack = props.stack
    const removeFromBurger = props.removeFromBurger
    return (
    <ul>
        {stack.length === 0 
            ? <p>Add some ingredients!</p>
            : stack.map((ingredient, index) => (
                <li style={{backgroundColor: ingredient.color}} key={index}>
                    {ingredient.name}
                    <button onClick={() => removeFromBurger(ingredient)} style={{backgroundColor: "black", color: "white"}}>x</button>
                </li>
            ))
        }
    </ul>)
}

// export 
export default BurgerStack