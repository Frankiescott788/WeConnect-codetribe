import { Button } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="fixed top-0 right-0 left-0 px-2 lg:px-[4rem] py-4">
      <div className="flex justify-between">
        <div className="logo">Logo here</div>
        <div className="lg:flex gap-5 hidden">
          <ul className="flex gap-5 mt-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
          <div>
            <Button className="bg-[#2667ff] text-white px-[3rem] rounded-full">
              Sign in
            </Button>
          </div>
        </div>
        <div className="lg:hidden flex gap-3">
          <Button
            size="sm"
            className="bg-[#2667ff] text-white px-[2rem] rounded-full"
          >
            Sign in
          </Button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#9ca3af"}
              fill={"none"}
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <main className="pt-[12dvh]">
        <Outlet />
    </main>
    </>
  );
}
