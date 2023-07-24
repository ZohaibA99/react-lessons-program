import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import {RecipeForm} from "./RecipeForm/RecipeForm";

export class App extends Component{
    state = {
        recipes: initialRecipes,
    }

    addRecipe = newRecipe => {
        this.setState(prevState => ({
            recipes: [...prevState.recipes, newRecipe],
        }))
    }

    deleteRecipe = recipeId => {
        this.setState(prevState => ({
            recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
        }));
    };

    render() {
        return (
            <Layout>
                <RecipeForm onSave={this.addRecipe}></RecipeForm>
                <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe}></RecipeList>
                <GlobalStyle />
            </Layout>
        )
    }
}

// export const App = () => {
//     return (
//         <Layout>
//             <div>Recipe Form</div>
//             <RecipeList items={recipes} />
//             <div>Image modal</div>
//             <GlobalStyle />
//         </Layout>
//     );
// };