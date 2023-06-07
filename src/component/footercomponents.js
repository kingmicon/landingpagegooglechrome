import React from 'react'
import Linkscomponents from './linkscomponents'

const footercomponents = () => {
  return (
    <>
        <div style={{textDecoration: "none", backgroundColor: "#f2f2f2",marginTop: "30px",borderBottom: "1px solid #dadce0", padding: "5px"  }} >
          <Linkscomponents style={{textDecoration: "none",display: "flex", color: "black", }}text={"Nigeria"}/>
        </div>
        <div style={{textDecoration: "none", backgroundColor: "#f2f2f2",display: "flex", paddingTop: "5px", }} >
          <Linkscomponents style={{textDecoration: "none",display: "inline-block", color: "black", paddingLeft: "8px", border: "black"}}link1={"About"} link2={"Advertising"}link3={"Business"}link4={"How Search Works"}/>
          <Linkscomponents style={{textDecoration: "none",display: "inline-block", color: "black", position: "relative", right: "-200px" }}link1={"Carbon neutral since 2007"}/>
          <Linkscomponents style={{textDecoration: "none",display: "inline-block", color: "black", position: "relative", right: "-470px", paddingLeft: "10px"}}link1={"Privacy"} link2={"Terms"}link3={"Settings"}/>
        </div>
    </>
  )
}

export default footercomponents