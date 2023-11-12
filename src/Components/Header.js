import React from "react";
// import globe from "./Image/earth.png"
import {ReactComponent as GlobeSvg} from "./Image/globe.svg"

export default function Header () {
    return (
        <div className="header">    
            <GlobeSvg className = "globe" /> 
            <p>My Travel Journal.</p>
        </div>
    )
}