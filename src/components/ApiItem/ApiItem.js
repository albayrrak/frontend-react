import React from 'react'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./api-item.scss"
const ApiItem = ({ api, toogleBookmark }) => {
    return (
        <div className="api-item">
            <div className="item-icon">
                <img src={api.img} width="44px" alt="" />
            </div>
            <div className="item-detail">
                <h4>{api.category}</h4>
                <div className="item-category">{api.category}</div>
                <div className="item-description">{api.description}</div>
            </div>
            <div className="item-hover">
                <button onClick={() => toogleBookmark(api.id)}>
                    {api.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
                    Bookmark
                </button>
                <a href="#">
                    API Docs
                    <RiArrowDropRightLine />
                </a>
            </div>
        </div>
    )
}

export default ApiItem
