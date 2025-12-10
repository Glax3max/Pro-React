import React from 'react'
import {createRoot} from 'react-dom/client'

const forHeader = {
    width:"99vw",
    lineHeight:"15vh",
    textAlign:"center",
    fontFamily:"Montserrat",
    fontWeight:"300",
    fontSize:"27px",
    margin:"4px auto",
    color:"#555",
    boxShadow:"0px 0px 10px #ccc"
}

const forImageDiv = {
    width:"300px",
    height:"300px",
    margin:"50px auto 5px auto",
    boxShadow:"0px 0px 10px #ccc",
}

const forImage = {
    width:"100%"
}

const forImgaeDivText = {
    textAlign:"center",
    fontFamily:"Montserrat",
    fontWeight:"300",
    fontSize:"18px",
    lineHeight:"90px",
    letterSpacing:"6px"
}

const profession = {
    width:"300px",
    margin:"0px auto",
    textAlign:"center",
    color:"#ccc"
}

const threething = {
    width:"300px",
    margin:"12px auto",
    textAlign:"center",
    color:"#444",
    fontFamily:"Montserrat",

}

const describes = {
    display:"flex",
    justifyContent:"space-between",
    width:"50vw",
    margin:"20px auto"
}

const descBox = {
    width:"150px",
    height:"150px",
    margin:"0 20px",
    fontFamily:"Montserrat",
    fontWeight:"300",
    fontSize:"15px",
    boxShadow:"0px 0px 6px #ccc",
    textAlign:"center",
    lineHeight:"150px"
}

const name = "MR. GLOBE"
const jsxElement = (
    <div>
        <div style={forHeader}>Header</div> {/* header */}
        <div style={forImageDiv}>
            <img src='globe-2.jpg' alt='A globe image' style={forImage}/>
            <div style={forImgaeDivText}>{name}</div>
        </div>
        <div style={profession}>
            <code>An Atlas expert</code>
        </div>
        <div style={threething}>3 things that describes me best are:</div>
        <div style={describes}>
            <div style={descBox}>Guiding people</div>
            <div style={descBox}>Traveller's friend</div>
            <div style={descBox}>Explorer's friend</div>
        </div>
    </div>
)
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(jsxElement);