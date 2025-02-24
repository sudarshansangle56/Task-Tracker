"use client"
import { useEffect, useState } from "react";
import Front from "./components/Front";
import Sidebar from "./components/Sidebar";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents mismatch by rendering nothing initially

  return (
    <div className="h-full flex w-full bg-[#202D48]">
      <div className="hidden sm:block">

      <Sidebar/>
      </div>
      <Front />
    </div>
  );
};

export default Page;
