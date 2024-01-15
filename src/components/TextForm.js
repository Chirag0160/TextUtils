import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPClick = () => {
        console.log("Upper Case is Clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLOClick = () => {
        console.log("Lower Case is Clicked" + text);
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleonChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 bg-dark" onClick={handleUPClick}>Convert to UpperCase</button>
        <button className="btn btn-primary bg-dark" onClick={handleLOClick}>Convert to LowerCase</button>

    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>Characters: {text.length}</p><br /><p>Words: {text.split(" ").length}</p><br /><p>Minutes: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
