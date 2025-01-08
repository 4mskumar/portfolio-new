import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Comment = ({ username, head }) => {

    const [upRate, setUpRate] = useState(false)
    const [downRate, setDownRate] = useState(false)

  return (
    <div className="">
      <div className="flex py-6 border-b-[0.5px] border-zinc-400 flex-col">
        <div className="flex justify-between items-center">
          <p className="text-xl font-outfit text-zinc-800  font-medium">
            {username}
          </p>
            <div className="flex gap-2">
                <FaArrowUp onClick={() => setUpRate((prev) => !prev)} className={`text-md cursor-pointer text-zinc-500 ${upRate ? 'text-zinc-700': ''}`} />
                <FaArrowDown onClick={() => setDownRate((prev) => !prev)} className={`text-md cursor-pointer text-zinc-500 ${downRate ? 'text-zinc-700': ''}`} />
            </div>
        </div>

        <p className="text-gray-600">{head}</p>
      </div>
    </div>
  );
};

export default Comment;
