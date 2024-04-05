import React from 'react'
import Info from './CardInfo'
import CardAbout from './CardAbout'
import CardFooter from './CardFooter'


function MyCard() {
  return (
    <div className="myCard">
        <Info />
        <CardAbout />
        <CardFooter />
    </div>
  )
}

export default MyCard