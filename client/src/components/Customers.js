import React from 'react'

class Customers extends React.Component {
    render () {
        return (
            <>
                <div className='customers__container'>

                    <div className='customers__hero-img'>
                    <img src='' alt='' />
                    </div>

                    <div className='customers__form'>
                    <h1>customers</h1>
                    <form action='' method=''>
                        <label htmlFor='username' >Username</label>
                        <input type='text' />
                        <label htmlFor='password' >Password</label>
                        <input type='text' />

                        <p>Don't have an account? <span>Register instead!</span></p>


                        <button type='submit'>customers</button>
                    </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Customers