import React from 'react';
import infoImg from '../../assets/crystal1.jpg';


// button
const Button = ()=>(
  <div className="infoBtn">
    <button className='emailBtn'>Email</button>
    <button className='linkedInBtn'>LinkedIn</button>
  </div>
);

function Info() {
  return (
    <div className='cardInfo'>
      <img src={infoImg} alt="Card Info Image"/>
      <h3 className="name">Lone Wolf</h3>
      <h4 className="profession">Hunting</h4>
      <h5 className="website">lonewolf.com</h5>
      <Button />
    </div>
  )
}

export default Info;