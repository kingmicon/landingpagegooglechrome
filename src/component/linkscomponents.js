import React from 'react'

const linkscomponents = (props) => {
  return (
    <>
    <div style={{textDecoration: "none"}}>
        <ul style={{textDecoration: "none"}}>
        <li style={props.style}><a href='https://www.google.com/'style={{textDecoration: "none", color: "black"}}>{props.link}</a></li>
            <li style={props.style}><a href='https://www.google.com/'style={{textDecoration: "none", color: "black"}}>{props.link1}</a></li>
            <li style={props.style}>{props.text}</li>
            <li style={props.style}><a href='https://www.google.com/' style={{textDecoration: "none", color: "black"}}>{props.link2}</a></li>
            <li style={props.style}><a href='https://www.google.com/'style={{textDecoration: "none", color: "black"}}>{props.link3}</a></li>
            <li style={props.style}><a href='https://www.google.com/' style={{textDecoration: "none", color: "black"}}>{props.link4}</a></li>
            <li style={props.style}><a href='https://www.google.com/' style={{textDecoration: "none", color: "black"}}>{props.link5}</a></li>
        </ul>
    </div>
    </>
  )
}

export default linkscomponents