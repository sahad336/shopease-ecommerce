import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer'
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './styles/responsive.css';



function App() {
  return (
    <CartProvider>
    <div className="App">
      <header>
        <Navigation />
      </header>
          <main>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/home' element={<Home/>}/>
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:productId' element={<ProductDetail />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
         <footer>
        <Footer/>
      </footer>
    </div>
    </CartProvider>
  );
}

export default App;
