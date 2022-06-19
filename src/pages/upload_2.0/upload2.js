import React, { useEffect, useState } from "react";
import "./upload2.css";
import Upload from "../upload/upload"
import "../signup/signup.css";
function Upload2() {
  
  return (
  <div className="main">
      <div class="gfg-div">
    <div className="banner">
          <h1>Upload Banner </h1>
          <Upload />
    </div>
        <div className="subb">
        <button type="submit" className="gfg-button">Submit</button>
        </div>
        </div>

    </div>
  );
}

export default Upload2;