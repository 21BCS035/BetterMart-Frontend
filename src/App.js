import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element = {<Layout/>}>
        <Route index element= {<Home/>} />
        <Route path='about' element = {<About/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='product' element = {<OurStore/>}/>
        <Route path='my-orders' element = {<Order/>}/>
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path='blogs' element = {<Blog/>}/>
        <Route path='compare-product' element = {<CompareProduct/>}/>
        <Route path='wishlist' element = {<Wishlist/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path='my-profile' element = {<Profile/>}/>
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-password/:token" element={<Resetpassword />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="term-conditions" element={<TermsAndConditions />} />
        <Route path='cart' element = {<Cart/>}/>
        <Route path='checkout' element = {<Checkout/>}/>
       
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
