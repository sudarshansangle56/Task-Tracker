"use client";
import { useState } from "react";

export default function Navbar({ nav, setNav }) { // ✅ Accept props correctly
  return (
    <div className="h-[10px] w-full flex items-center justify-between text-[23px] bg-[#202D48] text-white">
      <p onClick={() => setNav(!nav)}>Show</p> {/* ✅ Toggle state */}
    </div>
  );
}
