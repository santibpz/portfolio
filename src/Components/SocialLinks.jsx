import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  
  const icons = [
    {
        id: 0,
        icon: (<>
            Github <FaGithub size={30}/>
           </>),
        style: "rounded-tr-md",
        href: "https://github.com/SantiagoBenitezPerez"
    },
    {
        id: 1,
        icon: (<>
            LinkedIn <FaLinkedin size={30}/>
           </>),
        href: "https://www.linkedin.com/in/santiago-ben%C3%ADtez-p%C3%A9rez-8bb065243/"
    },
    {
        id: 2,
        icon: (<>
            Email <HiOutlineMail size={30}/>
           </>),
    
        href: "mailto:A01782813@tec.mx"
    },
    {
        id: 3,
        icon: (<>
            Resume <BsFillPersonLinesFill size={30}/>
           </>),
        style: "rounded-br-md",
        href: "/cv.pdf",
        download: true
    }
  ]
  return (
    <div className="hidden lg:flex flex-col w-[1%]">
        <ul>
             
            {icons.map(({icon, id, style, href, download}) => <li key = {id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-600 border-r-8 ml-[-190px] hover:ml-[-100px] duration-300 ${style}`}>
                <a className="flex justify-between items-center w-full text-white" href={href} download = {download} target = "_blank" rel="noreferrer">
                    {icon}
                </a>
            </li>)}
            
        </ul>
    </div>
  )
}

export default SocialLinks
