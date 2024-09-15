"use client";
import Image from "next/image";
import pattern from "@/public/pattern.png";
import test from "@/public/hero.png";
import closeIcon from "@/public/close.svg";
import { getImageCar } from "@/utils";
export const CarDetails = ({ car, isOpen, closeModel }) => {
  return (
    <div
      className={`bg-black/[.8]  fixed top-0 w-full h-full ${isOpen ? "show" : "hide"} left-0 flex items-center justify-center`}
    >
      <div
        className={`w-[500px] rounded-lg p-5 bg-white relative ${isOpen && "showModel"}`}
      >
        <button
          className="block absolute right-6 top-6 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center"
          onClick={closeModel}
        >
          <Image src={closeIcon.src} width={20} height={20} alt="close-icon" />
        </button>
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[150px]">
            <Image
              src={pattern.src}
              fill
              alt="pattern Image"
              className="object-cover"
            />
          </div>
          <div className="absolute h-full  w-full left-0 top-1/2 -translate-y-1/2 flex ">
            <Image
              src={getImageCar(car)}
              fill
              alt="pattern Image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="relative bg-blue-100 h-[100px] rounded-lg">
            <Image
              src={getImageCar(car, "29")}
              fill
              alt="test image"
              className="object-contain"
            />
          </div>
          <div className="relative bg-blue-100 h-[100px] rounded-lg">
            <Image
              src={getImageCar(car, "33")}
              fill
              alt="test image"
              className="object-contain"
            />
          </div>
          <div className="relative bg-blue-100 h-[100px] rounded-lg">
            <Image
              src={getImageCar(car, "13")}
              fill
              alt="test image"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold my-3 capitalize">
            {car.make} {car.model}
          </h3>
          {Object.entries(car).map(([key, value]) => (
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-medium capitalize">
                {key.replace("_", " ")}
              </p>
              <p className="font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
