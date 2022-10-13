import React from "react"
import LocationIcon from "../images/pin.png"

export default function CardLocation(props) {
    return (
        <>
        
            <div className="card--container">
                <img src={props.locationImg} className="card--image" alt="location"/>
                    <div className="card--info">
                        <div className="card--description">
                            <div className="card--location">
                                <span><img className="location--icon" src={LocationIcon} alt="location icon"/></span>
                                <span><p className="location--name">{props.location}</p></span>
                                <span><a href={props.link}> View on Google Maps</a></span>
                            </div>
                            <h1 className="card--location-name">{props.name}</h1>
                                <p className="bold">{props.date}</p>
                                    <p>{props.description}</p>
                        </div>
                    </div>
            </div>
                <hr></hr>
        </>
    )
}