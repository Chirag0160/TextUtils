import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPClick = () => {
        // console.log("Upper Case is Clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLOClick = () => {
        // console.log("Lower Case is Clicked" + text);
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }
    const handleonChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleonChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 " onClick={handleUPClick} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white' }}>Convert to UpperCase</button>
        <button className="btn btn-primary  mx-3" onClick={handleLOClick} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white' }}>Convert to LowerCase</button>
        <button className="btn btn-primary  mx-3" onClick={handleClearClick} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white' }}>Clear Text</button>
        <button className="btn btn-primary  mx-3" onClick={handleCopy} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white' }}>Copy Text</button>
        <button className="btn btn-primary  mx-3" onClick={handleExtraSpace} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white' }}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>Characters: {text.length}</p><br /><p>Words: {text.split(" ").length}</p><br /><p>Minutes: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in above box to preview it here"}</p>
    </div>
    </>
  )
}
