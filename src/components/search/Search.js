import React from 'react'
import { GrSearch } from "react-icons/gr";
import "./search.scss"

const search = ({ placeholder, search, setSearch }) => {
    return (
        <div>
            <form className="api-search-form">
                <div className="icon">
                    <GrSearch />
                </div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
            </form>
        </div>
    )
}

export default search
