import React from 'react'
import Icon from '../dotimages.png'
const headercomponet = () => {
  return (
    <div style={{display: "flex", justifyContent: 'flex-end', padding: "20px", textDecoration: "none", marginBottom: '0px'}}>
        <a href='https://www.google.com/' style={{paddingLeft: "10px", textDecoration: "none"}}>Gmail</a>
        <a href='https://www.google.com/'style={{paddingLeft: "10px", textDecoration: "none"}}>Images</a>
        <a href='https://www.google.com/'><img src={Icon} alt='app-laucher' style={{height: "30px", paddingLeft:"10px"}}/></a>
        <button style={{paddingLeft: "10px",paddingRight: "10px", borderRadius: "100px", textAlign: "center", backgroundColor: "purple", color: "white", border: "none", paddingTop: "2px", marginLeft: "10px"}} ><a href='https://www.google.com/'style={{color: "white", textDecoration: "none", fontSize: "20px" }} >a</a></button>
    </div>
  )
}

export default headercomponet