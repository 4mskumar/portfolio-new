import React from "react";
import { links } from "../Links";

export const Content = () => {
  return (
    <div>
      <div>
        <p className="text-4xl text-zinc-800 font-outfit font-semibold">
          My projects
        </p>
      </div>
      <div>
        
        {links.map((link, index) => (
          <div className="flex flex-col gap-2 my-4" key={index}>
            <div className="flex gap-2">
              <p className="text-lg font-outfit text-zinc-800 font-bold">
                {link.name}:
              </p>
              <a
                href={link.link}
                target="blank"
                className="text-blue-700 text-md font-semibold"
              >
                {link.link}
              </a>
            </div>
            <div>
              <p className="text-md font-outfit text-gray-600">{link.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
