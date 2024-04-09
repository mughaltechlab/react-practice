import React, {useState} from 'react'
import memesData from './memesData';






function Meme() {
    
    //? useState  hook must be call only in functional component. "useState = State,use" (such as, [countVarhasValueZero, useMethodInWhichUseCountVar] = useState(0));
    
    // let [count, counter] = useState(0);
    let [url,setUrl] = useState('');
    function getMemeImg(){

        // counter(count+=1);
        // console.log(count);
        // const memeDataLength = memesData.data.memes.length;
        const rand = Math.random() * memesData.data.memes.length;
        const randInd = Math.floor(rand);
        const randMeme = memesData.data.memes[randInd];
        const randUrl = randMeme.url;
        setUrl((prevUrl)=>prevUrl = randUrl)
        console.log(url)
    }
    
  return (
    <main>
        <div className='form'>
            {/* <div className="count">{url}</div> */}
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
            <div className="memeImg">
                <img src={url} height={300} alt="" />
            </div>
        </div>
    </main>
  )
}


export default Meme