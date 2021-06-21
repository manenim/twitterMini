import React from 'react'
import './RightMenu.css'

const RightMenu = () => {
    return (
        <div id = 'right-menu'>
            <div className ="search">
                <img src = "/search.svg" alt="saerch"/>
                <input className = "search-input" type = "text" placeholder = "Search Twitter"/>
            </div>
            
            <div className ="trends">
                <h3 className = "trends-text">Trends for you</h3>

                <img src = '/right_image.svg' className = "trend-image" alt = "trend image" />

                <h3 className = 'sorry-text'>Sorry!! No trends yet...</h3>
            </div>
        </div>
    )
}

export default RightMenu
