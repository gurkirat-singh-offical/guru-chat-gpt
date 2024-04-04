import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { IoIosPhotos } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../../context/Context";
import { FaRegCommentDots } from "react-icons/fa6";
function Main() {
  const {
    input,
    setInput,
    recentPrompt,
    loading,
    showResult,
    resultData,
    onRequest,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative bg-slate-200">
      <div className="flex items-center justify-between text-3xl p-5 mr-5 text-green-500">
        <p className="font-semibold">My-GPT</p>
        <FaUserCircle className="w-[40px] rounded" />
      </div>

      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="mx-[50px]  text-[56px] text-blue-300 font-semibold p-[20px]">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can I help you today.</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="h-[200px] p-4 bg-gray-300 rounded-lg relative cursor-pointer gap-3 hover:bg-slate-200 hidden md:block">
                <p className="text-black-100 text-xl">Lorem, ipsum dolor.</p>
                <FaRegCompass className="w-[35px] p-1 absolute rounded bottom-3 right-2 text-4xl" />
              </div>
              <div className="h-[200px] p-4 gap-3 bg-gray-300 rounded-lg relative cursor-pointer hover:bg-slate-200 hidden md:block">
                <p className="text-black-100 text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.{" "}
                </p>
                <FaRegCompass className="w-[35px] p-1 absolute rounded bottom-3 right-2 text-4xl" />
              </div>
              <div className="h-[200px] p-4 gap-3 bg-gray-300 rounded-lg relative cursor-pointer hover:bg-slate-200 hidden md:block">
                <p className="text-black-100 text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                </p>
                <FaRegCompass className="w-[35px] p-1 absolute rounded bottom-3 right-2 text-4xl" />
              </div>
              <div className="h-[200px] p-4 gap-3  bg-gray-300 rounded-lg relative cursor-pointer hover:bg-slate-200 hidden md:block">
                <p className="text-black-100 text-xl overflow-hidden ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <FaRegCompass className="w-[35px] p-1 absolute rounded bottom-3 right-2 text-4xl" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="py-1
            max-h-[70vh] overflow-y-scroll"
            >
              <div className=" flex items-center gap-5 text-3xl my-5 mb-10 ">
                <FaUserCircle className="w-[40px] rounded " />
                <p>{recentPrompt}</p>
              </div>
              <div className="flex items-center gap-5 ">
                {/* <FaRegCommentDots className="text-3xl w-[40px] fixed" /> */}
                {loading ? (
                  <div className="w-[100%] flex flex-col gap-3">
                    <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-500 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-gray-500 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-gray-500 rounded col-span-2"></div>
                              <div className="h-2 bg-gray-500 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <FaRegCommentDots className="text-3xl w-[40px] mb-3 " />
                    <p
                      className="font-medium text-xl leading-2"
                      dangerouslySetInnerHTML={{ __html: resultData }}
                    ></p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <div className="absolute bottom-0 w-[100%] max-w-[900px] py-5  ">
          <div className="flex items-center justify-between gap-5 bg-gray-500 pl-[10px] py-[20px]  rounded-full ">
            <input
              type="text"
              placeholder="Enter a Promt here."
              className="flex-1 bg-transparent border-none outline-none p-1  ml-5 text-xl overflow-x-auto"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="w-[100px] flex items-center  md:gap-5 text-lg">
              <IoIosPhotos className="hidden md:block" />
              <FaMicrophone className="hidden md:block" />
              <IoSendSharp onClick={() => onRequest()} className="mr-0" />
            </div>
          </div>
          <p className="text-sm mx-4 my-auto text-center font-light ">
            Hie,my Gemini welcomes u.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
