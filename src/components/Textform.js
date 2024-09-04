import React,{useState} from 'react'

function Textform() {
    const [text,settext] = useState("")
    const [vowelCount, setVowelCount] = useState(0); 

    const handleOnChange = (event)=>{
        settext(event.target.value);

    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        settext(newText);
    }
    const handleTrailing = () =>{
        let newText = text.trim();
        settext(newText);
    }
    const handleClear = () =>{
        let newText = "";
        settext(newText);
    }
    const removeExtra = () =>{
        var newt = "";
        let arr = text.split(/\s+/);
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==""){
                newt += arr[i] + " ";
            }
        }
        settext(newt);
        }
    
            

       
  return (<>
    <div className="container">
        <h2 className='heading my-3'>Enter Text : </h2>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="floatingTextarea" placeholder='Enter Text' rows="6"></textarea>
  {/* <label for="floatingTextarea">Enter Text Here </label>  */}
  <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert UpperCase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert LowerCase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear All</button>
  <button className="btn btn-primary my-2 mx-2" onClick={removeExtra}>Remove Extra Spaces</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleTrailing}>Remove Trailing Space</button>
  {/* <button className="btn btn-primary my-2 mx-2" onClick={countVowel}>Count Vowels</button> */}






     </div>
     <div className="container">
        <h2>Text Summary</h2>
        <p>Total number of words: {text.trim().split(/\s+/).filter(Boolean).length}</p>
<p>Total number of characters: {text.length}</p>
<p>Total number of words: {text.trim().split(/\s+/).filter(Boolean).length*0.088}</p>
<h3>Preview</h3>
<p>{text}</p>
     </div>
     </>
  )
}

export default Textform
