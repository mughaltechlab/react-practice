import React from 'react'
import Card from './Card';



// card data
const cardData = [
    {
        img : './src/assets/card_img1.png',
        rating: '3.5',
        review: '7',
        country: 'USA',
        title: 'Mountain Biking Group',
        price: 50,
    },
    {
        img : './src/assets/card_img2.png',
        rating: '5',
        review: '6',
        country: 'USA',
        title: 'Learn wedding photography',
        price: 120,
    },
    {
        img : './src/assets/card_img3.png',
        rating: '4',
        review: '16',
        country: 'USA',
        title: 'Life lessons with Katie Zaferes',
        price: 136,
    },
    {
        img : './src/assets/card_img1.png',
        rating: '3.5',
        review: '7',
        country: 'USA',
        title: 'Mountain Biking Group',
        price: 50,
    },
    {
        img : './src/assets/card_img2.png',
        rating: '5',
        review: '6',
        country: 'USA',
        title: 'Learn wedding photography',
        price: 120,
    },
    {
        img : './src/assets/card_img3.png',
        rating: '4',
        review: '16',
        country: 'USA',
        title: 'Life lessons with Katie Zaferes',
        price: 136,
    },
];

// console.log(cardData);

function CardsRow() {
  return (
    <section className="cardsRow">
        {cardData.map((item,index)=>{
           return <Card data = {item} key={index}/>
        })}
    </section>
  )
}

export default CardsRow