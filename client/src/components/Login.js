import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setLoginCustomer }) => {
  const [customer, setCustomer] = useState({
    username: '',
    password: ''
  }) 

  const navigate = useNavigate()

  const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target
    setCustomer({
      ...customer,
      [name]:value
    })
  }

  const handleSubmit = async e => {
    console.log(e)
    try {
      axios.post('http://127.0.0.1:8000/login', customer)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        console.log(res.data.message)
        setLoginCustomer(res.data.customer)
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

  return (
    <>
    {console.log(customer)}
      <div className='login__container'>

        <div className='login__hero-img'>
          <img src='' alt='' />
        </div>

        <div className='login__form'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='text' id="username" onChange={handleChange} name="username" value={customer.username}/>
            <label htmlFor='password' >Password</label>
            <input type='password' id="password" onChange={handleChange} name="password"value={customer.password}/>

            <p>Don't have an account? <Link to="/register">Register instead!</Link></p>


            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login



