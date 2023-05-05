import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import User from "./components/user/User";


function App() {
    return (
        <section>
            <Header />
            <User />
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
                    id: 3,
                    name: "Wrapp"
                }} />
            </div>
        </section>

    );
}

export default App;
