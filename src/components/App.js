import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import {RecipeForm} from "./RecipeForm/RecipeForm";


//Component Life Cycle
//constructor, getDerivedStateFromProps, render, shouldCompUpdate, render, componentDidUpdate, componenentWillUnmount

//render > componentDidMount > getItem > setState > update > render > compDidUpdate > setItem
export class App extends Component{
    state = {
        recipes: [],
    }

    componentDidMount() {
        const savedRecipes = localStorage.getItem("recipes");
        console.log("get item >")
        if(savedRecipes != null){
            this.setState({recipes: JSON.parse(savedRecipes)});
        }
        else{
            this.setState({recipes: initialRecipes});
        }
        console.log("Set state > Did mount");
    }

    componentDidUpate(prevState, prevProps){
        if(prevState.recipes !== this.state.recipes){
            localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
        }
        console.log("set Item > updated")
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
        console.log("render method");
        return (
            <Layout>
                <RecipeForm onSave={this.addRecipe}></RecipeForm>
                <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe}></RecipeList>
                <GlobalStyle />
            </Layout>
        )
    }
}


///Lesson 5 handling render errors
// export class App extends Component{
//     state = {hasError: false};

//     componentDidCatch(error, info){
//         //If this method was called, then there is an error.
//         //set the state
//         this.setState({hasError: true});
//         //you can also send an error report to yoiur analytics service
//         //logErrorToMYService(error, info);
//     }

//     render() {
//         if(this.state.hasError) {
//             return <h1>Something went wrong, please try again later;</h1>
//         }

//         return this.props.children;
//     }
// }
