import React from 'react'
import "./works.scss"
import {KeyboardArrowRight, KeyboardArrowLeft} from "@material-ui/icons";
import {useState} from "react"


export default function Works() {
  const [currentSlide, setCurrentSlide]= useState(0)

  const data =[
    {
      id:"1",
      icon: "https://png.pngtree.com/background/20210706/original/pngtree-laptop-portable-computer-notebook-computer-background-picture-image_246963.jpg",
      title:"title",
      des:"lorem ipsum ullamco deserunt exercitation ex cillum nisi dolore. Ea ex Lorem deserunt qui cillum qui labore .",
      img:"https://png.pngtree.com/background/20210706/original/pngtree-laptop-portable-computer-notebook-computer-background-picture-image_246963.jpg"
    },
     {
      id:"2",
      icon: "https://png.pngtree.com/background/20210710/original/pngtree-blue-light-effect-computer-data-background-picture-image_979999.jpg",
      title:"title",
      des:"lorem ipsum ullamco deserunt exercitation ex cillum nisi dolore. Ea ex Lorem deserunt qui cillum qui labore .",
      img:"https://png.pngtree.com/background/20210710/original/pngtree-blue-light-effect-computer-data-background-picture-image_979999.jpg"
    },
     {
      id:"3",
      icon: "https://c8.alamy.com/comp/2C7Y23Y/universal-computer-wallpaper-in-vertical-format-for-your-project-2C7Y23Y.jpg",
      title:"title",
      des:"lorem ipsum ullamco deserunt exercitation ex cillum nisi dolore. Ea ex Lorem deserunt qui cillum qui labore .",
      img:"https://c8.alamy.com/comp/2C7Y23Y/universal-computer-wallpaper-in-vertical-format-for-your-project-2C7Y23Y.jpg"
    },
  ]

  const handleClick = (direction) =>{
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : setCurrentSlide (currentSlide < data.length-1 ? currentSlide+1 : 0)
  }
  return (
    <div className='works' id='works'>
      <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        { data.map(d=>(
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imageContainer'>
                  <img src={d.icon}alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.des}</p>
                <span>project</span>
              </div>
            </div>
            <div className='right'>
              <img src={d.img}/>
            </div>
          </div>
        </div>
        ))
        }
        </div>

      <a className='arrowLeft' onClick={()=>handleClick("left")}>
      <KeyboardArrowLeft className='left'/>
      </a>
       <a className='arrowRight'  onClick={()=>handleClick("right")}>
      <KeyboardArrowRight className='right'/>
      </a>

    </div>
  )
}
