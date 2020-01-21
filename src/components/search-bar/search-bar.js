import React from 'react';

function SearchBar(props){
    return <div>
    <input onChange={props.changed}></input>
    <button onClick={props.clicked}>Search</button>
    </div>
}

export default SearchBar;