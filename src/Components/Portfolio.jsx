import React from 'react'
import fightGame from '../assets/portfolio/fightGame.jpg'
import weatherApp from '../assets/portfolio/weatherApp.jpg'
import rockPaperScissors from '../assets/portfolio/rockPaperScissors.jpg'
import tipCalculator from '../assets/portfolio/tipCalculator.jpg'
import noteApp from '../assets/portfolio/noteApp.jpg'


const Portfolio = () => {

  const openTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  const projects = [
    {
        id:0,
        src: fightGame,
        demo: "https://fight-game.santiagobenite4.repl.co/",
        code: "https://replit.com/@SantiagoBenite4/Fight-game#script.js"
    },
    {
        id:1,
        src: weatherApp,
        demo: "https://Weather-App.santiagobenite4.repl.co",
        code: "https://replit.com/@SantiagoBenite4/Weather-App#script.js"
    },
    {
        id:2,
        src: rockPaperScissors,
        demo: "https://Rock-paper-scissors-game.santiagobenite4.repl.co",
        code: "https://replit.com/@SantiagoBenite4/Rock-paper-scissors-game#script.js"
    },
    {
        id:3,
        src: tipCalculator,
        demo:"https://tip-calculator.santiagobenite4.repl.co",
        code:"https://replit.com/@SantiagoBenite4/tip-calculator#script.js"
    }, 
    {
       id:4,
       src: noteApp,
       demo: "https://noteappfs.fly.dev/", 
       code: "https://github.com/SantiagoBenitezPerez/FULLSTACK-noteapp"
    }
  ]
  return (
    <div name = "portfolio" className="w-full text-white md:h-screen mt-[-35px]">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className = "pb-8">
                <p className = "text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className = "py-4">Click on the following elements to check some of my work:</p>
            </div>
            
            {/* structure for the portolio card */}
            <div className = "grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-12 sm:px-0">

                {/* element of the portfolio card */}
                {
                    projects.map(({src, id, demo, code}) => {

                    return (
                         <div key = {id} className = "shadow-md shadow-gray-600 rounded-lg">
                           <img className = "rounded-md hover:scale-105 duration-200" src={src} height = {300}  alt="portfolio project" />
                           <div className = "flex items-center justify-center">
                             <button onClick={() => {openTab(demo)}} className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold" >demo</button>
                             <button onClick={() => {openTab(code)}}className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold" >code</button>
                           </div>
                         </div>
                    )
                   })
                }
                

            </div>

        </div>
    </div>
  )
}

export default Portfolio
