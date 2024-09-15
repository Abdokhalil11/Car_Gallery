"use client";

import SearchManufacture from "./SearchManufacture";
import { useState } from "react";
import modelIcon from "@/public/model-icon.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  function submitHandling(e) {
    e.preventDefault();
    if (model === "" || manufacture === "") {
      return alert("enter a valid model and manufacture");
    }
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model.toLowerCase());
    } else {
      searchParams.delete("model");
    }
    if (manufacture) {
      searchParams.set("manufacture", manufacture.toLowerCase());
    } else {
      searchParams.delete("manufacturer");
    }
    const pathName = `${window.location.pathname}?${searchParams}#AllCar`;
    router.push(pathName);
  }
  return (
    <form
      onSubmit={submitHandling}
      className="flex items-center md:flex-nowrap flex-wrap   gap-3"
    >
      <div className="w-full">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
      <div className="relative w-full">
        <Image
          src={modelIcon.src}
          width={20}
          height={20}
          alt="car-logo"
          className="absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          value={model}
          className="bg-gray-100 h-9 rounded w-full  pl-10 text-sm outline-none"
          placeholder="model"
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <button type="submit">
        <Image
          src="/magnifying-glass.svg"
          width={50}
          height={50}
          alt="magnifying-glass"
        />
      </button>
    </form>
  );
}
