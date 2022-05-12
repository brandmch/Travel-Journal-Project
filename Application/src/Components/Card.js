import React from 'react'
import nav_arrow from '../Images/Asset 12.svg'

export default function Card(props) {

    return (
        <div className='card'>
            <img src={props.image} />
            <div className='card-text'>
                <div className='card-location'>
                    <img src={nav_arrow} className="nav_arrow" />
                    <p className='card-location-name'>{props.location}</p>
                    <p className='card-link'><a href={props.google_maps_link} target="_blank" rel="noreferrer noopener">View on Google Maps</a></p>
                </div>
                <h1 className='card-text-h1'>{props.name}</h1>
                <p className='card-date-visited'>{props.date_visited}</p>
                <p>{props.description}</p>
            </div>
        </div >
    )
} 