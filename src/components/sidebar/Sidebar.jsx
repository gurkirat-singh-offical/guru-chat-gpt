import React, { useContext, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Context } from '../../context/Context';
function Sidebar() {

   const [extented ,setExtented] = useState(false) 

   const { onRequest, prevPrompt, setRecentPrompt,newChat } = useContext(Context);

    async function loadPrompt(prompt) {
      setRecentPrompt(prompt);
      await onRequest(prompt);
    }
    
  return (
    <div className="min-h-[100vh]  inline-flex flex-col justify-between bg-slate-500 px-[10px] py-[10px] pt-5">
      <div>
        <div onClick={() => setExtented((prev) => !prev)}>
          {/* <IoMenu
            className="w-[20px] ml-[10px] block cursor-pointer"
            onClick={() => setExtented((prev) => !prev)}
          /> */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-[30px] ml-[10px] block cursor-pointer text-6xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="48"
              d="M88 152h336M88 256h336M88 360h336"
            ></path>
          </svg>
        </div>
        <div
          onClick={() => newChat()}
          className="mt-[20px] inline-flex items-center gap-[15px] text-black-500 cursor-pointer px-3 p-3 pr-[40px] rounded-3xl  text-black hover:bg-slate-300"
        >
          <FaPlus className="w-[20px]" />
          {extented && <p>New Chat</p>}
        </div>
        {extented && (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-5">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  className="flex items-center gap-4 p-3 pr-[40px] rounded-3xl cursor-pointer text-black hover:bg-slate-300"
                  onClick={() => loadPrompt(item)}
                >
                  <IoChatbox className="w-[20px]" />
                  <p>{item.slice(0, 15)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col  ">
        <div className=" flex items-center gap-4 p-3 pr-[40px] rounded-3xl cursor-pointer text-black hover:bg-slate-300">
          <FaQuestion className="w-[20px]" />
          {extented && <p>Help</p>}
        </div>
        <div className=" flex items-center gap-4 p-3 pr-[40px] rounded-3xl cursor-pointer text-black hover:bg-slate-300">
          <FaClockRotateLeft className="w-[20px]" />
          {extented && <p>Activity</p>}
        </div>
        <div className=" flex items-center gap-4 p-3 pr-[40px] rounded-3xl cursor-pointer text-black hover:bg-slate-300">
          <IoSettingsSharp className="w-[20px]" />
          {extented && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar