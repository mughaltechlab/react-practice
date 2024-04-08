import React from 'react'

function Card({travel}) {
    return (
        <div className="card">
            {/* image */}
            <div className="image"><img src={travel.imgUrl} alt={travel.title} /></div>
            {/* details */}
            <div className="details">
                <div className="location">
                    {/* icon with name and link*/}
                    <i className="bi bi-geo-alt-fill"></i>
                    <span className="name">{travel.location}</span>
                    <a href={travel.mapLocation}>View on Google Maps</a>
                </div>
                <div className="title">{travel.title}</div>
                <div className="date">
                    <span className="start">{travel.startDate}</span> - <span className="end">{travel.endDate}</span>
                </div>
                <div className="description">{travel.description}</div>
            </div>
        </div>
    )
}

export default Card