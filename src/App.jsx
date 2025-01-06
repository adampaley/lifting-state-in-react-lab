// import
import './App.css'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'
import { useState } from 'react'

// data
export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
]

// component
const App = () => {
  // state variables
  const [stack, setStack] = useState([])

  // handler functions
  const addToBurger = (newIngredient) => {
    setStack([...stack, newIngredient])
  }

  const removeFromBurger = (removedIngredient) => {
    setStack(stack.filter(ingredient => ingredient !== removedIngredient))
  }


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger}/>
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  )
}

// export
export default App