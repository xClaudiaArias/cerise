import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/wishlist">WishList</Link>
                    </li>

                    <li>
                        <Link to="/account">Account</Link>
                        {/* <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/recent-purchases">Recent Purchases</Link></li>
                            <li><Link to="/account-settings">Account Settings</Link></li>
                        </ul> */}
                    </li>


                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/search">Search</Link>
                    </li>


                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>

            {/* Categories Nav */}
            
            <div id="top-bar">
                <ul> 
                    <li>
                        <Link to="/categories/babies">Babies</Link>
                    </li>

                    <li>
                        <Link to="/categories/toddlers">Toddlers</Link>
                    </li>

                    <li>
                        <Link to="/categories/kids">Kids</Link>
                    </li>


                    <li>
                        <Link to="/categories/accessories">Accessories</Link>
                    </li>
                </ul>
            </div>




            <Outlet />
        </>
    )
}

export default Layout