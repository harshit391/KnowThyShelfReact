import React from "react";

const Search = () => {
    return (
        <div className="search-bar">
            <div className="input-field">
                <label htmlFor="input" id="label-search"><i className="fas fa-search"></i></label>
                <input type="text" placeholder="Search something..." id="input" name="input"/>
                <label htmlFor="input"><i className="fas fa-times"></i></label>
            </div>
        </div>
    )
}

export default Search;