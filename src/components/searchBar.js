import React from 'react'
import '../App.css'

const SearchBar = () => {
    return (
        <div className="searchBox">
            <input type="text" placeholder="Type to search..." className="search-txt" />
            <button className="search-btn"><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar
