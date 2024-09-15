import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/logo.svg";
export default function NavBar() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={logoImage.src}
              width={120}
              height={30}
              alt="logo-image"
            />
          </Link>
        </div>
        <nav>
          <ul className="list-none">
            <li>
              <Link
                href={"/"}
                className="bg-white text-blue-300 rounded-full w-32 h-12 grid place-items-center"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
