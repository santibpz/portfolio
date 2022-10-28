import React from 'react'
import Html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import Github from '../assets/github.png'
import python from '../assets/python.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c.png'

const Experience = () => {

  const technologies = [
    {
      id:0,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
        id:1,
        src: css,
        title: "CSS",
        style: "shadow-blue-500"
      },
      {
        id:2,
        src: javascript,
        title: "JAVASCRIPT",
        style: "shadow-yellow-500"
      },
      {
        id:3,
        src: reactImg,
        title: "REACT",
        style: "shadow-blue-600"
      },
      {
        id:4,
        src: tailwind,
        title: "TAILWIND",
        style: "shadow-sky-400"
      },
      {
        id:5,
        src: Github,
        title: "GITHUB",
        style: "shadow-gray-500"
      },
      {
        id:6,
        src: c,
        title: "C++",
        style: "shadow-blue-500"
      },
      {
        id:7,
        src: node,
        title: "NODE JS",
        style: "shadow-green-400"
      },
      {
        id:8,
        src: python,
        title: "PYTHON",
        style: "shadow-yellow-400"
      },
]
// t-[115px]
  return (
    <div  name = "experience" className="w-full h-screen ">
        <div className = "max-w-screen-lg mx-auto flex flex-col py-[100px]  justify-center w-full h-full text-white">
            
            <div className  = "mt-16">
                <p className = "text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
                <p className = "pt-4">These are the frameworks,  languages I have worked with in college: </p>
            </div>

            <div className = "w-full grid grid-cols-2 sm:grid-cols-3 gap-5 px-5 text-center mb-10 sm:px-2">
                {/* grid layout of cards */}

                {technologies.map(({id, src,title, style}) => {
                     return(
                      <div key = {id} className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                      <img src={src} alt="technology/programming language used" className="w-20 mx-auto"/>
                      <p className="mt-4">{title}</p>
                      </div>
                     )
                })}

                
            </div>
        </div>
    </div>
  )
}

export default Experience