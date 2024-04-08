import {useState} from 'react'
import memesData from './memesData';

function getMemeImg(){
    const memeDataLength = memesData.data.memes.length;
    const rand = Math.random() * memeDataLength;
    const randInd = Math.floor(rand);
    const randMeme = memesData.data.memes[randInd];
    // const url = randMeme.url;
    const {url} = randMeme;
    console.log(url)
}


function Meme() {
  return (
    <main>
        <div className='form'>
            <input 
                type="text"
                className='formInp'
                placeholder='Top text'
            />
            <input 
                type="text"
                className='formInp'
                placeholder='Bottom text'
            />
            <button 
                className='formBtn'
                type="submit"
                onClick={getMemeImg}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="memeImg"></div>
    </main>
  )
}


export default Meme