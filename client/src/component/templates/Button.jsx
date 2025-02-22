import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({path,name}) => {
  return (
    <div>
        <Link 
          to={`${path}`}
          className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white">
            {name || "Attempt Test"}
          </Link>
    </div>
  )
}

export default Button