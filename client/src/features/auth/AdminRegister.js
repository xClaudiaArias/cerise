import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';


const AdminRegister = () => {
    const [admin, setAdmin] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '', 
        password2: ''
    })
    
    const navigate = useNavigate()
      // functions 
    const handleChange = e => {
        const {name, value} = e.target
        setAdmin({
            ...admin,
            [name]:value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        const {firstname,lastname,email,username,password,password2} = admin
        if( firstname && lastname && email && username && password && password2) {
            axios.post('http://127.0.0.1:8000/admin-register', admin)
            .then(res => {
                console.log(res, ' i am res')
                navigate('/login')
            }) 
        } else {
            alert('invalid input')
        }
    }
    return (
        <>
            <div className='admin__register-container'>
                <div className='admin__register-hero-img'>
                    <img src='' alt='' />
                </div>

                <div className='admin__register-form'>
                    <h1>Register</h1>

                    <form onSubmit={handleSubmit}> {/*register form*/}
                    <label htmlFor='firstname'>First Name</label>
                    <input onChange={handleChange} type='text' name='firstname' id='firstname'  value={admin.firstname} />
                    <label htmlFor='lastname'>Last Name</label>
                    <input onChange={handleChange} type='text' name='lastname' id='lastname' value={admin.lastname} />
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleChange} type='email' name='email' id='email'  value={admin.email}/>
                    <label htmlFor='username'>Username</label>
                    <input onChange={handleChange} type='text' name='username' id='username' value={admin.username} />
                    <label htmlFor='password'>Password</label>
                    <input onChange={handleChange} type='text' name='password' id='password' value={admin.password} />
                    <label htmlFor='password2'>Confirm Password</label>
                    <input onChange={handleChange} type='text' name='password2' id='password2' value={admin.password2} />

                    <p>Already have an account? <Link to="/login">Login instead!</Link></p>

                    <button type='submit' value='Submit'>Register Admin</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminRegister