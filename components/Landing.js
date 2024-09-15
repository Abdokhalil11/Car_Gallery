import carLanding from "@/public/hero.png";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing pt-9">
      <div className="container flex justify-between gap-5 flex-col lg:flex-row ">
        <div className="">
          <h1 className="lg:text-6xl text-[50px] font-extrabold lg:leading-[90px] leading-[70px]">
            Find, Book, rent a Car--quick and super easy !
          </h1>
          <p className="text-gray-500 py-4 text-[20px] lg:w-[400px] w-full ">
            Streaming your car rental experience with our effortless booking
            process
          </p>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-full">
            ExplorerCars
          </button>
        </div>
        <div className="w-full  ">
          <div
            className="relative h-[560px] w-full
            before:w-[900px] before:h-[900px]
            before:max-md:w-screen before:max-md:h-[450px]
            before:max-md:left-1/2 before:max-md:top-0
            before:rounded-full before:bg-blue-600 before:absolute  before:z-0 
            before:left-1/2
            before:-top-1/2
            before:-z-10
          "
          >
            <Image
              src={carLanding.src}
              fill
              alt="landing-car"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
