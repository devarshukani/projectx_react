import React from "react";
import check from "/check.svg";

const EmailSent = ({ setEmailSent }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>
      <div className="relative w-[537px] h-75 bg-white rounded-xl p-5">
        <div className="flex justify-between">
          <h1 className="text-zinc-800 text-2xl font-semibold"> </h1>
          <i
            onClick={() => setEmailSent(false)}
            className="text-2xl ri-close-large-line hover:cursor-pointer"
          >
            {" "}
          </i>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-24 h-24 flex justify-center rounded-full border-[3.05px] border-blue-900">
            <img src={check} alt="" />
          </div>
        </div>

        <div className="w-full mt-5 text-center justify-start text-zinc-800 text-3xl font-semibold font-['Open_Sans']">
          Email Send
        </div>
        <div className="w-full mt-5 text-center justify-start text-zinc-800 text-base font-semibold font-['Open_Sans']">
          Please check your email
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
