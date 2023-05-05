import React from 'react'

class Search extends React.Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Search' />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default Search