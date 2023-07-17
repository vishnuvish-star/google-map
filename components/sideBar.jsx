import Image from "next/image";
import React from "react";

const SideBar = () => {
  const menu = [
    {
      id: 1,
      name: "search",
      logo: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    },
    {
      id: 2,
      name: "fav",
      logo: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z",
    },
  ];

  return (
    <div className="p-2 flex items-center flex-col w-[100px] space-y-5 shadow-lg shadow-red-300 h-screen sticky top-0 bg-white">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      {menu.map((Item) => (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 hover:text-red-400 hover:bg-red-200 p-2 rounded-md"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={Item.logo}
            />
          </svg>
        </>
      ))}
    </div>
  );
};

export default SideBar;
