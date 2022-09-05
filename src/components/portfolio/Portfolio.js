import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';
import {KeyboardArrowDown} from "@material-ui/icons"
import { featuredPortfolio,
designPortfolio,
mobilePortfolio,
webPortfolio,
brandingPortfolio } from '../data/Data'

export default function Portfolio( ) {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list =[
    {
      id:"featured",
      title:"Featured"
    },
     {
      id:"web",
      title:"Web App"
    },
     {
      id:"mobile",
      title:"Mobile"
    },
     {
      id:"design",
      title:"Design"
    }, 
    {
      id:"branding",
      title:"Branding"
    },

  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
        case "mobile":
        setData(mobilePortfolio)
        break;
        case "web":
        setData(webPortfolio)
        break;
        case "design":
        setData(designPortfolio)
        break;
        case "branding":
        setData(brandingPortfolio)
        break;
    
      default:
        setData(featuredPortfolio)
        break;
    }
   
    
  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
          id={item.id}/>
        ))}
       
      </ul>
      <div className='container'>
        {data.map(d=>(

        <div className='item'>
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
        </div>
        ))}
       
      </div>
      <a href='#works'>

      <KeyboardArrowDown className='arrow'/>
      </a>

    </div>
  )
}
