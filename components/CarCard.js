"use client";
import { calculateCarRent, getImageCar } from "@/utils";
import Image from "next/image";
import test from "@/public/hero.png";
import wheel from "@/public/steering-wheel.svg";
import fuel from "@/public/gas.svg";
import tire from "@/public/tire.svg";
import arrow from "@/public/right-arrow.svg";
import { CarDetails } from "./CarDetails";
import { useState } from "react";
export default function CarCard({ car }) {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, drive, make, model, transmission, year } = car;
  return (
    <>
      <div className=" -skew-x-1 p-6 group text-black-100 bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl transition">
        <div className="flex flex-col items-start gap-2 w-full ">
          <h2 className="text-black font-bold text-2xl capitalize max-h-[65px] overflow-y-hidden">
            {make} {model}
          </h2>

          <p className="font-extrabold text-3xl flex">
            <span className="text-sm font-bold self-start">$</span>
            {calculateCarRent(+city_mpg, +year)}
            <span className="text-xs font-medium self-end">/day</span>
          </p>

          <div className="relative h-40 w-full object-contain">
            <Image
              src={getImageCar(car)}
              fill
              priority
              alt="car-test"
              className="object-contain"
            />
          </div>
          <div className="w-full relative">
            <div className="group-hover:invisible flex items-center justify-between w-full mt-3 *:flex *:items-center *:flex-col *:justify-between *:gap-2 text-xs text-gray-500">
              <div>
                <Image
                  src={wheel.src}
                  width={20}
                  height={20}
                  alt="wheel-icon"
                />
                <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
              </div>
              <div>
                <Image src={tire.src} width={20} height={20} alt="tire-icon" />
                <p>{drive.toUpperCase()}</p>
              </div>
              <div>
                <Image src={fuel.src} width={20} height={25} alt="fuel-icon" />
                <p>{city_mpg}MPG</p>
              </div>
            </div>
            <button
              className="absolute  left-0 top-0 w-full font-bold h-full font-xs bg-blue-500 rounded-full invisible group-hover:visible text-white"
              onClick={() => setIsOpen(true)}
            >
              View More
              <Image
                src={arrow.src}
                width={20}
                height={20}
                alt="arrow-icon"
                className="absolute right-[16px] top-1/2 -translate-y-1/2"
              />
            </button>
          </div>
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
      />
    </>
  );
}
