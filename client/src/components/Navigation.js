import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>

                    <li>
                        <Link to="/babies">Babies</Link>
                    </li>

                    <li>
                        <Link to="/toddlers">Toddlers</Link>
                        {/* <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/recent-purchases">Recent Purchases</Link></li>
                            <li><Link to="/account-settings">Account Settings</Link></li>
                        </ul> */}
                    </li>

                    <li>
                        <Link to="/kids">Kids</Link>
                    </li>


                    <li>
                        <Link to="/accessories">Accessories</Link>
                    </li>
                </ul>
            </nav>




            <Outlet />
        </>
    )
}

export default Layout