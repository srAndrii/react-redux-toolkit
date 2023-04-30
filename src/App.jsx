import RecipeItem from "./recipe-item/RecipeItem";

function App() {
    return (
        <div>
            <RecipeItem recipe={{
                id: 1,
                name: "Lavash"
            }} />
            <RecipeItem recipe={{
                id: 2,
                name: "Shaurma"
            }} />
            <RecipeItem recipe={{
                id: 2,
                name: "Wrapp"
            }} />
        </div>
    );
}

export default App;
