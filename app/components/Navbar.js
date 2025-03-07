"use client";
import { useState } from "react";

export default function Navbar({ nav, setNav }) { // ✅ Accept props correctly
  return (
    <div className="h-[10px] w-full cursor-pointer flex items-center justify-between text-[23px] bg-[#202D48] text-white">
      <p onClick={() => setNav(!nav)}>=</p> {/* ✅ Toggle state */}
    </div>
  );
}
