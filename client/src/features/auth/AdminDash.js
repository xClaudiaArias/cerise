import React from 'react'

const AdminDash = () => {
    return (
        <>
            <h1>THIS CAN ONLY BE SEEN WHEN YOU'RE SIGNED IN</h1>
            <div className="admin__dashboard">
                <div className="admin__top-bar">
                    <div className="logo">CERISE</div>
                    <div className="account-container">
                        <p>Welcome, <span>Admin</span></p>
                    </div>
                </div>
                <div className="admin__mid-bar"><h1>Section Title</h1></div>
                <div className="admin__side-bar">
                    <ul>
                        <li>Administrators</li>
                        <li>Users</li>
                        <li>Products</li>
                    </ul>

                    <button>Log Out</button>
                </div>
                <div className="admin__filter-bar">
                    <div className="admin__search-bar">
                        <span>icon</span>
                        <input type="search" placeholder="Search"/>
                    </div>

                    <div className="admin__filter-buttons">
                        <button className="filter">Filter</button>
                        <button className="create">Create</button>
                    </div>
                </div>
                <div className="admin__main">
                    <div className="metadata">
                        <table>
                            <tr>
                                <th>
                                    <form>
                                        <input type="checkbox" />
                                    </form>
                                </th>
                                <th>Example 1</th>
                                <th>Example 2</th>
                                <th>--</th>
                                <th>--</th>
                            </tr>

                            <tr>
                                <td>
                                    <form>
                                        <input type="checkbox" />
                                    </form>
                                </td>
                                <td>example1.1</td>
                                <td>example2.1</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="meta_info">
                        <div>Page rows: <span>1/3</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash