import React, { useState } from "react";
import { Link } from 'react-router-dom'

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab

  

  return (
    <div className="px-4 md:px-16 lg:px-32 xl:px-[40rem] my-3">
      <div className="border-t-[1px] pt-2 border-zinc-300 flex justify-between">
        {["Posts", "About", "Content", "Slambook", "Contact"].map(
          (text, ind) => (
            <Link to={`${"/" + text}`} key={ind}>
              <p
                key={ind} // Add a unique key for each item
                onClick={() => setActiveIndex(ind)}
                // onChange={() => setActiveIndex(0)} // Set the active tab index
                className={`text-gray-500 ${
                  activeIndex === ind
                    ? "font-semibold border-b-[3px] border-zinc-800  text-gray-800"
                    : ""
                } font-outfit text-sm md:text-lg transition-colors pb-1 duration-300`}
              >
                {text}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
