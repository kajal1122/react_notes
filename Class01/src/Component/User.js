import React from 'react'

const User = ({name, location, email}) => {
  return (
    <div className='user-card'>
        <h2>{name} </h2>
        <h2>{location}</h2>
        <h2>connect at : {email}</h2>

    </div>
  )
}

export default User;