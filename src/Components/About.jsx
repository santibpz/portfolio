import React from "react";

const About = () => {
  return (
    <div name = "about" className=" w-full h-screen text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className = "pb-8">
          <p className = "text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima
          dolore iure cumque ducimus nisi veniam culpa nemo aliquam corporis
          harum nostrum debitis at pariatur aut, ab doloribus voluptas
          asperiores accusamus iste quos unde. Earum, qui dignissimos impedit
          repellat, commodi in cumque consectetur, velit aliquid doloribus
          accusamus laboriosam esse amet?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi id
          aut culpa voluptate ab sequi placeat possimus labore voluptatibus, sit
          doloribus quos beatae nostrum eveniet provident laudantium commodi.
          Dolores eligendi impedit eos, eaque, quas doloremque in sequi
          dignissimos blanditiis laborum odio debitis voluptate magnam ipsam
          maiores vel ut obcaecati voluptas.
        </p>
      </div>
    </div>
  );
};

export default About;
