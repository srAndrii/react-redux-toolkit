
import { useDispatch, useSelector } from 'react-redux'
import styles from './RecipeItem.module.css'
import { actions } from '../store/favorites/favorites.slice'
import { useActions } from '../hooks/useActions'

function RecipeItem({ recipe }) {
    const { favorites } = useSelector(state => state)

    const { toggleFavorites } = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

    console.log(favorites)
    return (
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from' : 'Add to'} favorites</button>
        </div>
    )
}

export default RecipeItem