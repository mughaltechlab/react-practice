import React, {useState, useEffect} from 'react'
// import memesData from './memesData';






function Meme() {
    
    // *******************((
    //? useState  hook must be call only in functional component. "useState = State,use" (such as, [countVarhasValueZero, useMethodInWhichUseCountVar] = useState(0));
    // *******************))

    const url = 'https://api.imgflip.com/get_memes';
    const [apiData, setAPiData] = useState({})

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAPiData(data.data.memes))
    },[])
    // console.log(apiData)

    const [memeObj, setMemeObj] = useState({
                                    topText : 'one two three',
                                    bottomText : 'you are free',
                                    imgUrl : 'https://i.imgflip.com/39t1o.jpg',
                                });

    function getMemeImg(){

        const rand = Math.random() * apiData.length;

        // console.log(apiData.length)

        const randInd = Math.floor(rand);
        const randMeme = apiData[randInd];
        const randUrl = randMeme.url;

        setMemeObj((prevObj)=>{
            return {
                ...prevObj,
                imgUrl : randUrl,
            }
        })
    }

    function handleTopInp(e){
        setMemeObj(prevObj=>({
            ...prevObj,
            topText : e.target.value
        }))
    }

    function handleBottomInp(e){
        setMemeObj(prevObj=>({
            ...prevObj,
            bottomText : e.target.value
        }))
    }
    
    
  return (
    <main>
        <div className='form'>
            <input 
                type="text"
                className='formInp'
                name='topText'
                placeholder='Top text'
                value={memeObj.topText}
                onChange={handleTopInp}
            />
            <input 
                type="text"
                className='formInp'
                placeholder='Bottom text'
                value={memeObj.bottomText}
                onChange={handleBottomInp}
            />
            <button 
                className='formBtn'
                type="submit"
                onClick={getMemeImg}
            >
                Get a new meme image 🖼
            </button>
            <div className="memeImg">
                <div className="text topText">{memeObj.topText}</div>
                <img src={memeObj.imgUrl} height={300} alt="" />
                <div className="text bottomText">{memeObj.bottomText}</div>
            </div>
        </div>
    </main>
  )
}


export default Meme