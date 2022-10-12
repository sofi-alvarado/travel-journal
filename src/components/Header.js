import React from "react";
import EarthIcon from "../images/earth.png"

import "../styles/styles.css"

export default function Header() {
    return (
        <nav className="header">
            <img src={EarthIcon} className="header--icon"/>
            <p className="header-title">my travel journal.</p>
        </nav>
    )
}