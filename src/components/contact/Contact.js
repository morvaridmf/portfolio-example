import {React, useState} from 'react'
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src="https://www.qsrinternational.com/DancingGoat/media/QSR/Contact%20Us/QSR-ContactUs-TopBanner-final.png"></img>

      </div>
      <div className='right'>
      <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='mail'></input>
          <textarea type="text" placeholder='message'/>
          <button type='submit'>Send</button>
        </form>
          {message && <p>Thanks for your message!</p>}

      </div>

    </div>
  )
}
