import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/api";


function App() {
    const { isLoading, data } = useGetRecipesQuery()
    console.log(data)
    return (
        <section>
            <Header />
            <CreateRecipe />
            {/* <User /> */}
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ?
                    data.map(recipe => <RecipeItem recipe={recipe} key={recipe.id} />
                    ) : (
                        <div>Not found</div>
                    )}

            </div>
        </section>

    );
}

export default App;
