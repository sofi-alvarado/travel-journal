import React from "react"
import MET from "../images/met.jpg"
import LocationIcon from "../images/pin.png"

export default function CardLocation() {
    return (
        <>
            <div className="card--container">
                <img src={MET} className="card--image" alt="location"/>
                    <div className="card--info">
                        <div className="card--description">
                            <div className="card--location">
                                <span><img src={LocationIcon} style={{width: '18px', height:'20px'}}/></span>
                                <span><p className="location--name">NEW YORK </p></span>
                                <span><a href="https://goo.gl/maps/Bmw7sAjBD1bBsZK89"> View on Google Maps</a></span>
                            </div>
                            <h1 className="card--location-name">Metropolitan Museum of Art</h1>
                                <p className="bold">12 jan, 2021 - 24 Jan, 2021</p>
                                    <p>
                                        The Metropolitan Museum of Art of New York City, colloquially 
                                        "the Met", is the largest art museum in the Americas. 
                                        Its permanent collection contains over two million works,
                                        divided among 17 curatorial departments.
                                    </p>
                        </div>
                        
                    </div>
            </div>
            <hr></hr>
        </>
    )
}