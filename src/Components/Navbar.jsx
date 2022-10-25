import React, {useState} from 'react'

import {FaBars, FaTimes} from  "react-icons/fa"
import {Link} from 'react-scroll'


const Navbar = () => {
  // state of the hamburger menu
  const [menu, setMenu] = useState(true)
 
  const links = [
    {
        id:0,
        linkName: "home"
    },
    {
        id:1,
        linkName: "about"
    },
    {
        id:0,
        linkName: "portfolio"
    },
    {
        id:0,
        linkName: "experience"
    },
    {
        id:0,
        linkName: "contact"
    },
  ]
  return (
    <div className = "flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed top-0">
        <div>
          <h1 className = "text-4xl font-signature ml-2">
            Santiago
          </h1>
        </div>

        <ul className = "hidden md:flex">
            {links.map(({id, linkName}) => <li key = {id} className = "px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to = {linkName} smooth duration = {500}>
               {linkName}
              </Link>
              </li>
              )}
        </ul>

        <div onClick = {() => setMenu(!menu)} className = "text-gray-500 pr-2 cursor-pointer z-10 hover:scale-105 duration-200 md:hidden">
            {!menu ? <FaTimes size = {30}/> : <FaBars size = {30}/>}
        </div>

        {/* menu: mobile version */}
        
        {!menu ? <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transition delay-150 duration-300 ease-in-out">
           {links.map(({id, linkName}) => <li key = {id} className = "px-4 cursor-pointer capitalize py-3 text-3xl hover:scale-105 duration-300">{linkName}</li>)}
        </ul> : null}
        
        
    </div>
  )
}

export default Navbar