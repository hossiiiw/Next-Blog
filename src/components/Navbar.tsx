import Link from "next/link";
import React from "react";

function Navbar() {
  const link = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "blog",
      link: "/blogs",
    },
    {
      title: "article",
      link: "/addarticle",
    },
  ];

  return (
    <>
      <div className="w-full p-4 bg-white">
        <nav>
          <ul className="flex gap-5">
            {link.map((item) => {
              return (
                <li
                  key={item.link}
                  className="w-24 text-center text-black font-bold bg-blue-400 rounded p-2"
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
