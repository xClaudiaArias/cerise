import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [customer, setCustomer] = useState({
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
    setCustomer({
      ...customer,
      [name]:value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {firstname,lastname,email,username,password,password2} = customer
    if( firstname && lastname && email && username && password && password2) {
      axios.post('http://127.0.0.1:8000/register', customer)
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
        <div className='register__container'>

          <div className='register__hero-img'>
            <img src='' alt='' />
          </div>

          <div className='register__form'>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}> {/*register form*/}
              <label htmlFor='firstname'>First Name</label>
              <input onChange={handleChange} type='text' name='firstname' id='firstname'  value={customer.firstname} />
              <label htmlFor='lastname'>Last Name</label>
              <input onChange={handleChange} type='text' name='lastname' id='lastname' value={customer.lastname} />
              <label htmlFor='email'>Email</label>
              <input onChange={handleChange} type='email' name='email' id='email'  value={customer.email}/>
              <label htmlFor='username'>Username</label>
              <input onChange={handleChange} type='text' name='username' id='username' value={customer.username} />
              <label htmlFor='password'>Password</label>
              <input onChange={handleChange} type='text' name='password' id='password' value={customer.password} />
              <label htmlFor='password2'>Confirm Password</label>
              <input onChange={handleChange} type='text' name='password2' id='password2' value={customer.password2} />

              <p>Already have an account? <Link to="/login">Login instead!</Link></p>

              <button type='submit' value='Submit'>Register</button>
            </form>
          </div>
        </div>
      </>
    )
} 

export default Register