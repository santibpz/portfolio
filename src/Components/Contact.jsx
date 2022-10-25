import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className = "w-full h-screen text-white">
        <div className = " flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className = "pb-8">
                <p className = "text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className = "py-6">Submit the form below to get in touch with me: </p>
            </div>

            <div className = "flex justify-center items-center">
                <form 
                action="https://getform.io/f/b62de9bc-44be-4d30-8dee-838b29736b45" 
                method = "POST"
                className = "flex flex-col w-full md:w-1/2">
                    <input 
                     type="text"
                     name = "name" 
                     placeholder = "Enter your name" 
                     className = "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                     />

                     <input 
                     type="text"
                     name = "email" 
                     placeholder = "Enter your email" 
                     className = "my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                     />

                     <textarea 
                     name="message" 
                     placeholder = "Enter your message..."
                     rows="10" 
                     className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">

                     </textarea>

                     <button className = "text-white bg-gradient-to-b from-cyan-500 to-cyan-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 flex-items-center">
                        Contact
                     </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact