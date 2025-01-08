import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Contact = () => {
  // const [Shadow, setShadow] = useState(second)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-start mt-3 gap-2">
        <h1 className="text-4xl font-outfit text-zinc-800 font-semibold">
          Work with me
        </h1>
        <p className="text-xl font-outfit text-zinc-600 font-medium">
          adityakr4ms@gmail.com 👋{" "}
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="text-blue-500 text-[0.99rem] ml-2 underline"
          >
            open mail
          </a>
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-5 w-full items-center mt-8">
        <form className="w-full space-y-6">
          {/* Name and Email Fields */}
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label
                htmlFor="name"
                className="text-lg font-outfit text-zinc-800 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                className="w-full shadowB px-3 py-2 outline-none  rounded-md border-black border-[1px] "
                type="text"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label
                htmlFor="email"
                className="text-lg font-outfit text-zinc-800 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                className="w-full shadowB px-3 py-2 outline-none  rounded-md  border-black border-[1px]"
                type="email"
              />
            </div>
          </div>

          {/* Mobile Number and Message Fields */}
          <div className="flex flex-wrap gap-5">
            <div className="flex justify-between flex-col  flex-1 min-w-[200px]">
              <div>
                <label
                  htmlFor="number"
                  className="text-lg font-outfit text-zinc-800 font-medium"
                >
                  Mobile no
                </label>
                <input
                  id="number"
                  className="w-full shadowB px-3 py-2 outline-none  rounded-md  border-black border-[1px]"
                  type=""
                />
              </div>
              <div className="flex overflow-hidden w-[106.5%]  -ml-2 px-2 py-2 justify-start">
                <button
                  type="submit"
                  className="px-6 w-full h-20 font-outfit py-2 hover:bg-gray-200 duration-300 hover:translate-x-2 hover:translate-y-2 ease-in-out bg-white border-[1px] border-black shadowB text-black  rounded-lg font-medium text-xl"
                >
                  Send message
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1  min-w-[200px]">
              <label
                htmlFor="msg"
                className="text-lg font-outfit text-zinc-800 font-medium"
              >
                Message
              </label>
              <textarea
                id="msg"
                rows={4}
                className="w-full shadowB px-3 py-2 h-[8.1rem]  outline-none rounded-md  border-black border-[1px]"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
        </form>
      </div>
      <div className="flex justify-center items-center mt-10">
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
          subscribe
        </button>
      </div>
      <div className="flex pb-10 justify-center items-center mt-3">
        <p className="mt-2 text-zinc-600 font-outfit text-lg">
          No spam, just good old quality content. Unsubscribe anytime.
        </p>
      </div>
      <div className="border-t-[1px] flex border-zinc-300 justify-between px-10 py-5">
        <a href="https://github.com/4mskumar" target="blank">
          <FaGithub className="w-7 h-7 cursor-pointer" color="#71717A" />
        </a>
        <a href="https://x.com/adies__s" target="blank">
          <FaXTwitter className="w-7 h-7 cursor-pointer" color="#71717A" />
        </a>
        <a href="https://leetcode.com/u/adies/" target="blank">
          <TbBrandLeetcode className="w-7 h-7 cursor-pointer" color="#71717A" />
        </a>
        <a href="nstagram.com" target="blank">
          <FaInstagram className="w-7 h-7 cursor-pointer" color="#71717A" />
        </a>
        <Link to="/slambook">
          <FaBook className="w-7 h-7 cursor-pointer" color="#71717A" />
        </Link>
      </div>
    </div>
  );
};
