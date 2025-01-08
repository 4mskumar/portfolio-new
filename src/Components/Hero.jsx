import gsap from "gsap";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const Hero = () => {

  useEffect(() => {
    gsap.fromTo("#nav_logo", {
      y: 3,
      x:-3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    }, {
      y: -3,
      x: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })
  }, [])

  return (
    <div className="px-4 md:px-16 relative lg:px-32 xl:px-40 2xl:px-[40rem]">
      <Link to="/" >
        <img id="nav_logo" src="./public/assets/logo.png" alt="logo" className="w-[4rem] left-2 hover:bg-zinc-300  rounded-lg py-2 cursor-pointer mt-2  absolute  object-cover" />
      </Link>
      {/* Header Section */}
      <div className="py-2 w-full flex flex-col">
        <p className="font-outfit text-xl md:text-2xl text-zinc-800 font-semibold">
          Adi
        </p>
        <p className="text-zinc-500 font-outfit text-sm md:text-xl">4 posts</p>
      </div>

      {/* Image Section */}
      <div className="w-full relative h-32 md:h-48">
        <img
          className="w-full h-full rounded-lg select-none object-cover"
          src="./public/assets/vid.gif" // Ensure the correct path
          alt="Animated GIF"
        />
        <div className="absolute flex z-10 justify-between w-full -bottom-16 px-2">
          <div className="flex justify-between w-full items-end">
            <div className="flex items-center">
              <img
                className="w-48  h-48 md:w-36 md:h-36 border-white border-4 bg-white rounded-full object-cover"
                src="./public/assets/aditya.jpg"
                alt="logo"
              />
            </div>
            <div>
              <a href="https://x.com/adies__s" target="blank" className="px-3 py-1 z-10 md:px-4 md:py-2 font-outfit bg-blue-500 text-white rounded-lg">
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="mt-20 flex flex-wrap gap-2 items-center">
        <div>
          <p className="text-lg md:text-2xl font-outfit text-zinc-800 font-semibold tracking-tighter">
            Aditya Kumar
          </p>
          <p className="text-xs md:text-sm font-mono text-gray-500">
            @adies__s
          </p>
        </div>
        <div>
          <FaCheckCircle color="#27272a" className="text-sm mb-3 md:text-base" />
        </div>
      </div>

      {/* About Section */}
      <div>
        <p className="mt-4 text-sm md:text-lg font-outfit text-zinc-800 font-semibold">
          I am a software developer and a tech enthusiast. I love to learn about
          technologies and share my knowledge with the community.
        </p>
      </div>

      {/* Additional Info Section */}
      <div className="mt-4 flex flex-wrap gap-5">
        <div className="flex gap-2 items-center">
          <IoSchoolOutline size={18} color="#4b5563" />
          <p className="text-sm md:text-md text-gray-600">Education</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineLocationOn size={18} color="#4b5563" />
          <p className="text-sm md:text-md text-gray-600">Delhi, India</p>
        </div>
        <div className="flex gap-2 items-center">
          <SlCalender size={18} color="#4b5563" />
          <p className="text-sm md:text-md text-gray-600">
            Joined September 2023
          </p>
        </div>
      </div>

      {/* Followers Section */}
      <div className="mt-3 flex gap-5">
        <p className="text-sm md:text-md text-gray-600">
          <span className="font-semibold text-lg font-outfit text-gray-900">
            24
          </span>{" "}
          Following
        </p>
        <p className="text-sm md:text-md text-gray-600">
          <span className="font-semibold text-lg font-outfit text-gray-900">
            28
          </span>{" "}
          Followers
        </p>
      </div>
    </div>
  );
};

export default Hero;
