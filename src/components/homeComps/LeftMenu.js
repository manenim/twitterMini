import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { BiListCheck, BiNavigation, BiNotification, RiBookMarkLine, RiHome3Line, RiMailLine, RiMap2Line, RiMoreLine, RiProfileLine } from 'react-icons/all'
import './LeftMenu.css'

const LeftMenu = () => {
    return (
        <div id = "left-menu">
            <IconContext.Provider value={{ size: "2.2rem", className: "global-class-name" }}>
            <nav className = "left-menu-wrapper">
                <div className = "left-menu-cont">
                    <li><a href = "#" className = "active"><AiOutlineTwitter/></a></li>   
                    <li><a href = "#" className = "active"><RiHome3Line/><span className = "left-menu-span">Home</span ></a></li>    
                    <li><a href = "#"><RiMap2Line/><span className = "left-menu-span">Explore</span ></a></li> 
                    <li><a href = "#"><BiNotification/><span className = "left-menu-span">Notifications</span ></a></li>   
                    <li><a href = "#"><RiMailLine/><span className = "left-menu-span">Messages</span ></a></li>    
                    <li><a href = "#"><RiBookMarkLine/><span className = "left-menu-span">Bookmarks</span ></a></li>   
                    <li><a href = "#"><BiListCheck/><span className = "left-menu-span">Lists</span ></a></li>   
                    <li><a href = "#"><RiProfileLine/><span className = "left-menu-span">Profile</span ></a></li>
                    <li><a href = "#"><RiMoreLine/><span className = "left-menu-span">More</span ></a></li>    
                   
                </div>
            </nav>
             </IconContext.Provider>

            
        </div>
    )
}

export default LeftMenu
