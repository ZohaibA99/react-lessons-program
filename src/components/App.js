import { Component } from "react";
import { Layout } from "./Layout";
import { BreedSelect } from "./BreedSelect";
import { fetchDogByBreed } from "api";
import { Dog } from "./Dog";
import { ErrorMessage } from "./ErrorMessage";
import { DogSkeleton } from "./DogSkeleton";

const ERROR_MSG = 
    `Something went wrong please try again later`;

export class App extends Component{
    state = {
        dog: null,
        isLoading: false,
        error: null,
    }

    fetchDog = async breedId => {
        try {
          this.setState({ isLoading: true, error: null });
          const fetchedDog = await fetchDogByBreed(breedId);
          this.setState({ dog: fetchedDog });
          console.log(this.state.dog)
        } catch (error) {
          this.setState({ error: ERROR_MSG });
        } finally {
          this.setState({ isLoading: false });
        }
      };

    render() {
        const {dog, isLoading, error} = this.state;
        return(
            <Layout>
                <BreedSelect onSelect={this.fetchDog} />
                 {isLoading && <DogSkeleton />}
                 {error && <ErrorMessage />}
                 {dog && !isLoading && <Dog dog={dog} />}
            </Layout>
        )
    }
}






















// import React, { Component } from "react";
// import Api from '../services/Api';

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// export class App extends Component {
//   state = {
//     articles: [],
//     isLoading: false,
//     error: null,
//   };

//   async componentDidMount() {

//     try {
//         this.setState({isLoading: true});
//         const articles = Api.fetchArticlesWithQuery("react");
//         this.setState({ articles });
//       } catch (error) {
//         this.setState({ error });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }

//   render() {
//     const { articles, isLoading, error } = this.state;
//     return (
//       <div>
//             {error && <p>Whoops, something went wrong: {error.message}</p>}
//             {isLoading && <p>Loading...</p>}
//             {articles.length > 0 && <ArticleList articles={articles}></ArticleList>}
//       </div>
//     );
//   }
// }