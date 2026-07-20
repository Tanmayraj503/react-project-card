import React from "react";

export default function Secret() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#080E21] text-white">
      <h1 className="text-3xl font-bold text-purple-400">Hello there, Traveller!</h1>
      <p className="mt-4">Either you are a very curious creature, or somehow you have the access to my codebase!</p>
      <p className="mt-2">Either way, I hope you are having a great day!</p>
      <p className="mt-2">I hope you liked my portfolio, and i request you to <span className="text-red-500">not copy & paste my work</span> for your own good because this takes time and effort to make.</p>
      <p className="mt-4 text-green-400">- Tanmay Raj</p>
    </div>
  );
}