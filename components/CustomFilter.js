"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import chevron from "@/public/chevron-up-down.svg";
import { generationSearchParams } from "@/utils";
export default function CustomFilter({ type, options }) {
  const router = useRouter();
  function submitHandling(e) {
    const newPathName = generationSearchParams(type, e.target.value);
    router.push(newPathName)
  }
  return (
    <div className="relative w-fit">
      <Image
        src={chevron.src}
        width={20}
        height={20}
        className="absolute right-1 top-1/2 -translate-y-1/2"
      />
      <select
        className="shadow-lg h-9 rounded-lg pl-3 min-w-[126px] w-full
      appearance-none"
        onChange={submitHandling}
      >
        {options.map((el) => (
          <option value={el.value} className="truncate">
            {el.title}
          </option>
        ))}
      </select>
    </div>
  );
}
