import React from 'react'
import './SearchBar.css'

function SearchBar() {

    const userSearch = '';
  return (
    <div className='search'>
        <div className='searchInputs'>
        <input 
            placeholder='Search for category...' 
            onChange={(event) => {userSearch(event.target.value)}}
        />
        </div>

    </div>
  )
}

export default SearchBar