import React,{useState} from "react"
const tf = require('@tensorflow/tfjs');

const Predict= ()=>{
    let image= "Diagnose-me/src/0a38b552372d.png"
    const handlePredict = async () => {
        const MODEL_PATH = 'https://cdn.glitch.global/dd712284-b4e7-4ec9-9ea8-bdc54ab34cdb/model.json?v=1655154748644';
          const model = await tf.loadLayersModel(MODEL_PATH);
          console.log(model.summary());
       
        //   let tensorImg =await tf.browser.fromPixels(imageprev).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
          let prediction=model.detect(image).data();
          console.log(prediction) 
    }  
   
    return (
         <div> 
            <h1>Upload to server</h1>
            <input type='file' name='file' id="selected-image" />
            <button type='submit' onClick={handlePredict}>Predict</button>   
         </div>
    )


}

export default Predict;

