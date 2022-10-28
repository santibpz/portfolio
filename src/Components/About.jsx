import React from "react";

const About = () => {
  return (
    <div name = "about" className="w-full h-screen text-white ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className = "pb-8">
          <p className = "text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl">
        Student of Computer Science at Tecnológico de Monterrey, Santa Fe Campus. I would like to dive into software development so I can take part in the solution to the problems within our society. I believe that I can contribute value in these areas of knowledge in companies that need digital solutions that have a long lasting effect and are efficient.
        </p>

        <br />

        {/* <p className="text-xl">
          
        </p> */}
      </div>
    </div>
  );
};

export default About;
