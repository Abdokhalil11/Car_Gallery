import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";
export default function Footer() {
  return (
    <footer className=" pt-8 pb-4">
      <div className="container flex flex-wrap items-start justify-between ">
        <div>
          <Image
            src={logo.src}
            width={118}
            height={18}
            alt="logo image"
            className="object-contain mb-3"
          />
          <p className="block last:mb-0 text-sm text-gray-600 font-normal  ">
            Carhub 2023
            <br />
            All Right Reserved &copy;
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {footerLinks.map((el, i) => (
            <div className="" key={i}>
              <h4 className="text-black font-semibold  mb-3">{el.title}</h4>
              {el.links.map((el, i) => (
                <Link
                  className="block mb-3 last:mb-0 text-sm text-gray-600 font-normal"
                  href={el.url}
                  key={i}
                >
                  {el.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between mt-20">
          <p>&copy; CarHub.All right reserved </p>
          <div className="flex gap-3">
            <Link href={"?"} className="text-gray-600 text-sm">
              Policy & Privacy
            </Link>
            <Link href={"?"} className="text-gray-600 text-sm">
              Terms and condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
