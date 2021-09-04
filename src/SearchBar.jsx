import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Clear';
import {useState} from 'react';

function SearchBar({placeholder, data}) {
    const [searchValue, setSearchValue] = useState('')
    
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value) 
        
    }
    const handleClearClick = (event) => {
        setSearchValue('')
    }
    const filteredProducts = data.filter( book => {
        return book.title.toUpperCase().includes(searchValue.toUpperCase())
        
        
    })
    const shouldDisplay = searchValue.length > 0

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={searchValue} onChange={handleInputChange} />
                {shouldDisplay? <div className="searchIcon"><ClearIcon onClick={handleClearClick} /></div>: <div className="searchIcon"><SearchIcon /></div>}
            </div>
            { filteredProducts.length > 0 && shouldDisplay &&
            <div className="results">
                {filteredProducts.map((value, key) => {
                    return <a className="dataItem" href={value.image} target='_blank'><p>{value.title}</p></a>
                }) }
            </div>} 
            
        </div>
    )
}

export default SearchBar
