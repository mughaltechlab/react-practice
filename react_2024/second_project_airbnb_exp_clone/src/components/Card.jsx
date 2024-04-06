import React from 'react'


// React.createElement('h1',{
//     children : 
// });

// class components --deprecated
// class Tourch extends React.Component{

     

//     render(){
//         return (
//             <div>Hello</div>
//         )
//     }
// }


function Card({data}) {
    return (
    <div className="card">
            <img src={data.img} />
            <div className="ratingRow">
               <i className="bi bi-star-fill"></i>
               <span className="rating">{data.rating}</span>
               <span className="review">({data.review})</span>.
               <span className="country">{data.country}</span>
            </div>
            <div className="title">
                <p>{data.title}</p>
            </div>
            <div className="price"><span>From ${data.price}</span> / person</div>
            {/* <Tourch /> */}
        </div>
  )
}

export default Card