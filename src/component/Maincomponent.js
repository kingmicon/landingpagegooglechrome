import { useState } from 'react'
import Image from '../googleimage.png'
import Images from '../cameraimage.png'
import Icon from '../microphoneimages.png'
import Icons from '../searchimages.png'
import Linkscomponents from './linkscomponents'

const Maincomponent = () => {
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
    <div style={{display: "flex", justifyContent: 'center',marginTop: '0px'}}>
        <img src={Image} alt='web'/>
    </div>
    <form   style={{display: "flex", justifyContent: 'center'}}>
      <button  style={{height: "40px", marginTop: "10px", backgroundColor: "white", position: "absolute", marginRight: "600px", border: "none" }}><img src={Icons} alt='web' style={{height: "20px", backgroundColor: "white"}}/></button>
    <input type="text" placeholder='Search Google or type a URL' onChange={handleChange}  style={{display: "flex",paddingLeft: "70px", height: '50px', width: '600px', fontSize: '20px',borderRadius: "30px", border: "1px solid"}} />
    <button style={{height: "40px", marginTop: "8px", backgroundColor: "white", position: "absolute", marginLeft: "520px", border: "none",  }}><img src={Icon} alt='web' style={{height: "40px", backgroundColor: "white"}}/></button>
    <button style={{height: "40px", marginTop: "8px", backgroundColor: "white", position: "absolute", marginLeft: "600px", border: "none" }}><img src={Images} alt='web' style={{height: "25px", backgroundColor: "white"}}/></button>
    </form>
    <h3 style={{display: "flex", justifyContent: 'center',marginTop: '10px', fontSize: "15px", textDecoration: "none"}}>{text}</h3>
<br></br>
<div style={{display: "flex", justifyContent: 'center', fontSize: "15px",textDecoration: "none",}}>
<Linkscomponents style={{display: "inline-block", paddingLeft: "10px", lineSpace: "20px", justifyContent: 'center', textDecoration: "none", color: "black" }}link={"Google Search"} text= {"I'm Feeling Lucky"}/>
</div>
<div style={{display: "flex", justifyContent: 'center', fontSize: "15px", textDecoration: "none",}}>
<Linkscomponents style={{display: "inline-block", paddingLeft: "20px", justifyContent: 'center', color: "black" }}text={"Google offered in:"} link2= {"Hausa"}link3= {"Igbo"}link4= {"Èdè Yorùbá"}link5= {"Nigeria Pidgin"}/>
</div>
    </>

  );
}



export default Maincomponent