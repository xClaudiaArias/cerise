import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AdminLogin = ({ setAdminLogin }) => {
    const [admin, setAdmin] = useState({
        username: '',
        password: ''
    }) 

    const navigate = useNavigate()

    const handleChange = e => {
    const {name, value} = e.target
    setAdmin({
        ...admin,
        [name]:value
    })
    }

    const handleAdmin = async e => {
        console.log(e)
        try {
            axios.post('http://127.0.0.1:8000/admin-login', admin)
            .then(res => {
                console.log(res.data)
                setLoginAdmin(res.data)
                navigate('/')
            })
        } catch (err) {
            if (!err.status) {
                console.log('No server Response')
            } else if (err.status === 400) {
                console.log('Missing Username or Password')
            } else if (err.status === 401) {
                console.log("Unauthorized")
            } else {
                console.log(err.data?.message)
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <>
            {console.log(admin)}
            <div className='admin__container'>
                <div className='admin__hero-img'>
                    <img src='' alt='' />
                </div>

                <div className='admin__form'>
                    <h1>Admin Login</h1>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id="username" onChange={handleChange} name="username" value={admin.username}/>
                    <label htmlFor='password' >Password</label>
                    <input type='password' id="password" onChange={handleChange} name="password"value={admin.password}/>
                    
                    
                    <p>Already have an account? <Link to="/login">Login instead!</Link></p>

                    <button type='submit' onClick={handleAdmin}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin