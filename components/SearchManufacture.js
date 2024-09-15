"use client";
import { manufacturers } from "@/constants/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import carLogo from "@/public/car-logo.svg";
export default function SearchManufacture({ manufacture, setManufacture }) {
  const [appear, setAppear] = useState(false);
  const [query, setQuery] = useState("");
  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((el) =>
          el.toLowerCase().includes(query.toLowerCase())
        );

  function searchHandling(e) {
    setQuery(e.target.value);
    setManufacture(e.target.value);
  }

  function clickHandling(el) {
    setQuery(el);
    setManufacture(el);
    setAppear(false);
  }

  return (
    <div className="relative ">
      <div className="relative">
        <Image
          src={carLogo.src}
          width={20}
          height={20}
          alt="car-logo"
          className="absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          value={manufacture}
          className="bg-gray-100 h-9 rounded w-full  pl-10 text-sm outline-none"
          placeholder="Volkswagen"
          onChange={searchHandling}
          onFocus={() => setAppear(true)}
          onBlur={() =>
            setTimeout(() => {
              setAppear(false);
            }, 150)
          }
        />
      </div>
      <ul
        className={`data-list max-h-60 rounded-md bg-white overflow-y-scroll  ring-1 ring-black ring-opacity-5 ${appear ? "show" : "hide"} absolute w-full transition ease-in-out duration-150`}
      >
        {filterManufacturers.map((el) => (
          <li
            key={el}
            className="h-[40px] px-3 py-2 hover:bg-blue-600 hover:text-white text-gray-700 pr-4 pl-10 cursor-pointer"
            onClick={() => clickHandling(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
