import React, { useState } from "react";
import Comment from "../Components/Comment";
import { FaChevronDown } from "react-icons/fa";

export const Slambook = () => {
  const [openForm, setOpenForm] = useState(false);
  const [Todos, setTodos] = useState([])

  return (
    <div>
      <h1 className="text-4xl font-outfit text-zinc-800 font-semibold">
        Slambook...
      </h1>
      <div className="flex flex-col mt-5 justify-center items-center">
        <div className="flex">
          <input
            type="email"
            className="bg-zinc-800 text-lg outline-none placeholder:font-outfit pl-6 text-white text:font-outfit border-zinc-300 py-3 w-[25rem] rounded-l-full"
            placeholder="enter your email"
            name=""
            id=""
          />
          <button
            onClick={() => {}}
            className="cursor-pointer font-outfit font-semibld text-lg px-4 py-3 rounded-r-full bg-zinc-500 text-white"
          >
            submit
          </button>
        </div>
        <div>
          <p className="mt-2 text-zinc-600 font-outfit text-lg">
            Let me grab your email for latest news and you unsubscribe anytime
          </p>
        </div>
        <div className="mt-5 w-full max-h-screen">
          <div className="flex flex-col text-white justify-between items-center bg-zinc-800 w-full rounded-lg px-4 py-3">
            <div className="flex justify-between w-full items-center">
              <p className="text-2xl font-outfit font-medium ">Slambook form</p>
              <FaChevronDown
                className="cursor-pointer"
                onClick={() => setOpenForm((prev) => !prev)}
              />
            </div>
            {openForm && (
              <div className="w-full flex flex-col gap-4 py-4 mt-5 bg-zinc-700 px-4 rounded-lg">
                <input
                  type="text"
                  name=""
                  className="placeholder:font-outfit text-black outline-none rounded-lg py-1 w-full px-4"
                  placeholder="Your name"
                  id=""
                />
                <textarea
                  rows={6}
                  cols={4}
                  type="text"
                  name=""
                  className="placeholder:font-outfit text-black outline-none rounded-lg py-1 w-full px-4"
                  placeholder="Your feedback or message for me"
                  id=""
                />
                <input
                  type="url"
                  name=""
                  className="placeholder:font-outfit text-black outline-none rounded-lg py-1 w-full px-4"
                  placeholder="Your URL"
                  id=""
                />
                <button onClick={() => {location.reload()}} className="bg-zinc-500 font-outfit text-lg text-white py-2 rounded-lg">
                  Submit
                  </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5">
        {Todos.length === 0 ? <p className="text-2xl font-outfit text-zinc-800 font-semibold">No comments yet</p> 
        : 
        (
          <div>

          <Comment
          username={"username"}
        head={
          "It's a pretty awesome portfolio. I loved the work. Interactions are also lovely ❤❤"
          }
        />
        <Comment username={"aditya"} head={"Very good"} />
        <Comment
        username={"username"}
        head={
          "It's a pretty awesome portfolio. I loved the work. Interactions are also lovely ❤❤"
        }
        />
        </div>
      ) 
        }
      </div>
    </div>
  );
};
