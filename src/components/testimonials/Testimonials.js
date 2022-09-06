import React from 'react'
import "./testimonials.scss"
import {KeyboardArrowDown} from "@material-ui/icons"


export default function Testimonials() {

  const data= [
    {
      id:"1",
      img1:"https://www.pngguru.in/storage/uploads/images/Up%20arrow%20png%20image%20with%20transparent%20background_1648294695_780679262.webp",
      img2:"https://mpng.subpng.com/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg",
      img3:"http://cdn.onlinewebfonts.com/svg/img_24816.png",
      des:" Sint excepteur ipsum consectetur qui. Ut id duis est pariatur cillum tempor aliquip Sint excepteur ipsum consectetur qui. Ut id duis est pariatur cillum tempor aliquip ",
      name:"Sarah",
      job:"Hr of ..."
    },
     {
      id:"2",
      img1:"https://www.pngguru.in/storage/uploads/images/Up%20arrow%20png%20image%20with%20transparent%20background_1648294695_780679262.webp",
      img2:"https://mpng.subpng.com/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg",
      img3:"http://cdn.onlinewebfonts.com/svg/img_24816.png",
      des:"Sint excepteur ipsum consectetur qui. Ut id duis est pariatur cillum tempor aliquip non enim amet ullamco consectetur",
      name:"Alex",
      job:"CEO of ...",
      featured:true,
    },
     {
      id:"3",
      img1:"https://www.pngguru.in/storage/uploads/images/Up%20arrow%20png%20image%20with%20transparent%20background_1648294695_780679262.webp",
      img2:"https://mpng.subpng.com/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg",
      img3:"http://cdn.onlinewebfonts.com/svg/img_24816.png",
      des:"Sint excepteur ipsum consectetur qui. Ut id duis est pariatur cillum tempor aliquip ipsum consectetur qui. Ut id duis est pariatur cillum tempor aliquip ",
      name:"Maria",
      job:"Product Owner of ..."
    },
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map(d=>(
        <div className={d.featured ? "card featured " : "card"}>
          <div className='top'>
            <img className='left' src={d.img1}/>
            <img className='user' src={d.img2}/>
            <img  className='right' src={d.img3}/>
          </div>
          <div className='center'>
            <p>{d.des}</p>
          </div>
          <div className='bottom'>
            <h3>{d.name}</h3>
            <p>{d.job}</p>
          </div>
        </div>
        ))}
      </div>
      <a  href='#contact'>
        <KeyboardArrowDown className='arrow'/>
      </a>
       
    </div>
  )
}
