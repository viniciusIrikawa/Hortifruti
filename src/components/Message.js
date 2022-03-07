import React from 'react'
import '../components/Message.css'

const Message = () => {
  return (
    <div className='wrapper-msg'> 
        <div className='msgAdded'> 
            <span> Added! </span> 
            <button className='close-msg'> X </button>
        </div>
    </div>
  )
}
export default Message
