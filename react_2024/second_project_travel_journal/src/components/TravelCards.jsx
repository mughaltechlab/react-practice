import React from 'react'
import Card from './Card'
import data from './data'

function TravelCards() {
  return (
    <section className="travelCards">
        {
            data.map((item)=>{
                return <Card travel = {item} key={item.id} />
            })
        }
    </section>
  )
}

export default TravelCards