import React, { useState } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  const [hovered, setHovered] = useState(null); // State to track hover
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // State to track cursor position

  const techStackImages = {
    Mo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAusOjZJF_V7_0HtgK9QjLgB3J2Jn3KOQjQ&s",
    Ex: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    Rt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s",
    Nd: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
  };
  const techStackImages2 = {
    Tw: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    Gs: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
    Fm: "data:image/jpeg;base64,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",
    // Nd: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative overflow-x-hidden min-h-screen">
      {/* Custom Cursor */}
      <div
        style={{
          position: "fixed",
          top: cursorPos.y - 50, // Adjust to center the image
          left: cursorPos.x - 50, // Adjust to center the image
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered
            ? `url(${techStackImages[hovered]})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none", // Prevent interference with other elements
          zIndex: 1000,
          transform: hovered ? "scale(1)" : "scale(0)", // Scale up or down
          transition: "transform 0.3s ease-out", // Smooth scaling
        }}
      />
      <div
        style={{
          position: "fixed",
          top: cursorPos.y - 50, // Adjust to center the image
          left: cursorPos.x - 50, // Adjust to center the image
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered
            ? `url(${techStackImages2[hovered]})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none", // Prevent interference with other elements
          zIndex: 1000,
          transform: hovered ? "scale(1)" : "scale(0)", // Scale up or down
          transition: "transform 0.3s ease-out", // Smooth scaling
        }}
      />

      {/* About Section */}
      <div className="max-h-screen w-full">
        <h1 className="text-4xl font-outfit text-zinc-800 font-semibold">
          About me!
        </h1>
        <p className="text-[1.1rem] mt-2 font-outfit text-gray-700">
          Hi, I'm a passionate full-stack developer with 2 years of hands-on
          experience building dynamic and user-friendly applications. Currently
          pursuing college, I thrive on creating efficient solutions and
          bringing ideas to life through code. My love for technology drives me
          to learn, grow, and innovate every day.
        </p>
        <div className="flex justify-end my-16 flex-col items-end">
          <p className="text-gray-700 font-outfit text-sm text-right ">your beloved aditya kumar.</p>
          <img src='./public/assets/signature.png'  alt="signature" className=" w-[10rem]  -rotate-12" />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div>
        <h1 className="text-3xl mt-5 font-outfit text-zinc-800 font-semibold">
          My beloved tech stack 🤓
        </h1>
        <div className="mt-2 flex justify-between">
          {["Mo", "Ex", "Rt", "Nd"].map((item, index) => (
            <p
              key={index}
              className="text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
              onMouseEnter={() => setHovered(item)} // Set hovered item
              onMouseLeave={() => setHovered(null)} // Clear hovered item
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-2xl mt-5 font-outfit text-zinc-800 font-semibold">
        Other frameworks:</p>
        <div className="mt-2 flex gap-3">
          {["Tw", "Gs", "Fm"].map((item, index) => (
            <p
              key={index}
              className="text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
              onMouseEnter={() => setHovered(item)} // Set hovered item
              onMouseLeave={() => setHovered(null)} // Clear hovered item
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl mt-5 font-outfit text-zinc-800 font-semibold">
          Experience:
        </h1>
        <p className="text-[1.1rem] mt-2 font-outfit text-gray-700">
          I've completed 50+ projects (not industrial) 😚 ...
          <Link to="/content" className="text-blue-700">
            <span className="text-[1.1rem] mt-2 font-outfit cursor-pointer text-blue-700">
              learn more
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
