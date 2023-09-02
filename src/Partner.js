import React from 'react'

function Partner(props) {
  return (
    <div>
        <img src={`/images/${props.partnerImage}`} alt='' className='w-20 ml-10'/>
    </div>
  )
}

export default Partner