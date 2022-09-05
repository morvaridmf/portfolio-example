import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({title, id, setSelected, active}) {
  return (
    <li className={active ? "portfolioList sun ": "portfolioList"} onClick={()=>setSelected(id)}>
        {title}


    </li>
  )
}
