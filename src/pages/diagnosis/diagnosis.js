import React, { useState } from "react";
import "./diagnosis.css"
import Axios from "axios";
import Predict from "../../predict"

const tf = require('@tensorflow/tfjs');


function Diagnosis() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [tensor, setTensor] = useState([])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   // let formData = new FormData()
  //   // formData.append('file', image.data)
  //   // const response = await fetch('http://localhost:4000/image', {
  //   //   method: 'POST',
  //   //   body: formData,
  //   // })

  //   // if (response) setStatus(response.statusText)
  // }
  return (
    <div className='App'>
       <Predict/>
    </div>
  )

}

export default Diagnosis