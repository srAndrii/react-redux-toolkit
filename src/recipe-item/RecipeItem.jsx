function RecipeItem({ recipe }) {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <button>Add to favorites</button>
        </div>
    )
}

export default RecipeItem