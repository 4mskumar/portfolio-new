import React from 'react'
import { FaCommentDots, FaRegCommentDots } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { SiAnalogue, SiSimpleanalytics } from "react-icons/si";

export const Posts_card = ({heading, subheading, hashtag, src}) => {
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  return (
    <div className='w-full '>
        <div>
        <div>
          <div className="flex mt-5  justify-between items-center">
            <div className="flex gap-2 items-end">
              <h1 className="text-2xl tracking-tighter font-semibold text-zinc-900 font-outfit">
                Aditya Kumar
              </h1>
              <p className="text-md font-mono tracking-tighter text-gray-600">
                @adies__s
              </p>
              <p className="text-gray-500 text-lg font-bold mb-2/3">.</p>
              <p className="text- text-gray-600 ml-1">
                {new Date().getDate()}{" "}
                {month[new Date().getMonth()].substring(0, 3)}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="px-2 font-outfit text-md font-semibold rounded-full border-[1px] cursor-pointer border-zinc-900">
                Promote
              </p>
              <p className="text-md font-semibold mb-3 text-zinc-900">...</p>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center">
            <div>
              <p className="text-4xl font-outfit font-bold text-zinc-800">
                {heading}
              </p>
              <p className="mt-2 text-xl font-outfit text-zinc-700 font-medium">
              {subheading}
              </p>
              <p className="text-blue-500 text-xl mt-3">
                {hashtag}
              </p>
            </div>
            <div className=" w-full bg-gray-200 flex justify-center items-center rounded-lg mt-4">
              <div className="w-[30rem]  ">
                <img
                  className="w-full shadow-lg h-full object-cover"
                  src={src}
                />
              </div>
            </div>
            <div className="flex justify-between w-full mt-4">
              <FaRegCommentDots className="cursor-pointer" size={18} color="#4b5563" />
              <div className="flex items-center gap-2">
                <p className="text-sm font-light text-gray-600 flex items-end">
                  43
                </p>
                <SlLike size={17} className="cursor-pointer" color="#4b5563" />
                {/* <SiSimpleanalytics color="#4b5563" size={15} className="mb-1"/> */}
              </div>
              <TbArrowsShuffle size={17} className="cursor-pointer" color="#4b5563" />
              <div className="flex items-center gap-2">
                <p className="text-sm font-light text-gray-600 flex items-end">
                  244
                </p>
                <SiSimpleanalytics color="#4b5563" size={15} className="mb-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
