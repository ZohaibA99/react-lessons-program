import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Posts from './Posts/Posts';
import ProductDetails from './ProductDetails/ProductDetails';
import Products from './Products/Products';
import AboutData from './AboutData/AboutData';
import NotFound from './NotFound/NotFound';

function App() {
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}>
                    <Route path='data' element={<AboutData />}></Route>
                </Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/products/product/:productId/:name' element={<ProductDetails />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App;