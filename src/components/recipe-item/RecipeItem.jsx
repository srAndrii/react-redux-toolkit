import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavoites } from '../../hooks/useFavorites'

function RecipeItem({ recipe }) {
    const { favorites } = useFavoites()

    const { toggleFavorites } = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

    // console.log(favorites)
    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={150} />
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from' : 'Add to'} favorites</button>
        </div>
    )
}

export default RecipeItem