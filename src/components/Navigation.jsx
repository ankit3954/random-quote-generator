import React, { useState } from 'react'
import { Fragment } from 'react'
import {Link, Outlet} from "react-router-dom"
import "./Navigation.scss"

function Navigation() {

    const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className='navigation'>
        <Fragment>  
            <div className="nav-container">
                <Link  onClick={() => setSelectedLink("Home")} className={selectedLink === "Home" ? "clicked" : "nav-link"}  to={"/"}>
                    Home
                </Link>

                <Link onClick={() => setSelectedLink("Bookmarks")} className={selectedLink === "Bookmarks" ? "clicked" : " nav-link"} to={"/Bookmarks"}>
                    Bookmarks
                </Link>
            </div>
        <Outlet />
        </Fragment>
    </div>
  )
}

export default Navigation