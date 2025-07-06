import React , {useState}from "react";


export default function TextForm(props) {


    const handleUpClick=()=>{
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");

    }

    const handleloClick=()=>{
      // console.log("uppercase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("converted to lowercase", "success");

   }

   const handleclClick=()=>{
    // console.log("uppercase was clicked" + text);
     let newText = ' ';
     setText(newText);
     props.showAlert("cleared", "success");

 }



    const handleOnChange=(event)=>{
      //  console.log("On Change");
        setText(event.target.value); //type kr payenge textarea mai
      
    }
    const [text , setText] = useState(' ');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}
    >
        <h1 className="mb-4" >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}}
          id="myBox "
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclClick}>clear text</button>



    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
