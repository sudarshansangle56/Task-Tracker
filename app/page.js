"use client"
import { useEffect, useState } from "react";
import Front from "./components/Front";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents mismatch by rendering nothing initially

  return (
    <div className="h-full w-full bg-[#b4b2b233]">
      <Front />
    </div>
  );
};

export default Page;
