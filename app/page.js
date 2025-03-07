
import Front from "./components/Front";


const Page = () => {
 // Prevents mismatch by rendering nothing initially

  return (
    <div className="h-full flex w-full bg-[#202D48]">
      <Front />
    </div>
  );
};

export default Page;
