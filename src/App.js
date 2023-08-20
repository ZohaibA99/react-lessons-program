import {useState} from 'react';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import ProtectedRoute from 'routes/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import AboutData from './components/AboutData/AboutData';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import DetailsFooter from './components/detailsFooter/DetailsFooter';

function App() {
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const navigate = useNavigate();

    const loginHandler = (success, path) => {
        setIsLoggedin(true);
        navigate(path ?? '/', {replace: true});
    }

    if (!isLoggedIn){
        return <Login loginHandler={loginHandler}/>
    }

    return(
        <div>
            <Header />
            <Routes>
                <Route path='/login' element={<Login loginHandler={loginHandler} path='/'></Login>}></Route>
                <Route path='/about' element={<About />}>
                    <Route path='data' element={<AboutData />}></Route>
                </Route>
                <Route path='/' element= {
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path='/posts' element= {
                    <ProtectedRoute isLoggedIn={isLoggedIn} loginHandler={loginHandler} path='/posts'>
                        <Posts />
                    </ProtectedRoute>
                }
                />
                <Route path='/products' element={<Products />}></Route>
                <Route path='/products/product/:productId/:name' element={<ProductDetails />}></Route>
                <Route path='/footer' element={<DetailsFooter />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App;