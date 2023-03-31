import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Search from './components/Search';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import Babies from './components/Babies';
import Toddlers from './components/Toddlers';
import Kids from './components/Kids';
import Accessories from './components/Accessories';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="account" element={<Account />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />


          {/* Categories NavBar */}
            <Route path="/categories/babies" element={<Babies />} />
            <Route path="/categories/toddlers" element={<Toddlers />} />
            <Route path="/categories/kids" element={<Kids />} />
            <Route path="/categories/accessories" element={<Accessories />} />
          {/* END categories NavBar*/}

        </Route> {/* end LAYOUT route */}
      </Routes>
    </div>
  );
}

export default App;
