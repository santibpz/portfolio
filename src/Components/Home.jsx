import React from 'react'
import myImage from "../assets/imagen.jpg"
import {RiArrowRightSLine} from "react-icons/ri"
import SocialLinks from './SocialLinks'
// componente de Home 
const Home = () => {
  return (
    // container div
     <div name = "home" 
     className=" w-full"
     >
       <div className="md:mt-20 mx-auto flex flex-col-reverse items-center justify-around px-4 text-white md:flex-row">

         <SocialLinks />

         <div className="md:mt-28 flex flex-col justify-center mt-10">      

          {/* info container */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
            I am a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-justify">
            I have 2 years of experience working on web development based on the MERN stack (MongoDB, Express.js, React.js, Node.js )  
            Here is some of my work!
          </p>
          <div>
            <button className= "mx-auto group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700">
              Portfolio 
              <span className = "ml-2 group-hover:rotate-90 duration-500">
                <RiArrowRightSLine size = {30}/>
              </span>
            </button>
          </div>
         </div>
         
         <div>
          {/* img container */}
           <img src={myImage} alt="my profile in a suit" 
           className="md:mt-20 mt-32 rounded-2xl mx-auto w-60 h-56 md:w-80 md:h-80"
           />
         </div>
       </div>
     </div>
  )
}

export default Home