import request from "../utils/Requests";
import { useRouter } from "next/router";

export default function Navbar() {
  const route = useRouter();
  return (
    <div className="relative">
      <div className="scrollbar-hide flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            onClick={() => route.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </div>
  );
}
