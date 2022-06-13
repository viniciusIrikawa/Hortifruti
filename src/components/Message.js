import React from 'react'
import '../components/Message.css'

const Message = (props) => {
  return (
    <div className='wrapper-msg'> 
        <div className='msgAdded'> 
            <span> {props.itemName} Added! </span> 
            <button className='close-msg'> X </button>
        </div>
    </div>
  )
}
export default Message
