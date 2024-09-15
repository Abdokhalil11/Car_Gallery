"use client";
import { generationSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

export default function ShowMore({ pageNumber, isNext }) {
  const router = useRouter();
  function clickHandling() {
    const nextPageNumber = pageNumber + 10;
    const pathName = generationSearchParams("limit", nextPageNumber);
    router.push(pathName);
  }
  return (
    <>
      {!isNext && (
        <button
          className="mx-auto block px-4 py-3 bg-blue-500 rounded-full my-4 font-semibold text-white"
          onClick={clickHandling}
        >
          Show More
        </button>
      )}
    </>
  );
}
