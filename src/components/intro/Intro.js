import "./intro.scss"
import image from "../../assets/photo.jpeg"
import {KeyboardArrowDown} from "@material-ui/icons"
import {init} from "ityped"
import { useEffect, useRef} from 'react'

export default function Intro() {

  const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current,{
  //     showCursor:true,
  //     strings:["JavaScript Developer"]
  //   })

  // }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imageContainer'>
          <img src={image} className="image" alt=''></img>
        </div>

      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there I'm </h2>
          <h1>Morvarid Mahmoudi far</h1>
          <h3>Full stack <span ref={textRef}>JavaScript developer</span></h3>
          <a href='#portfolio'>
            <KeyboardArrowDown className='arrow'/>
            
          </a>

        </div>

      </div>
    </div>
  )
}
