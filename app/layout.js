import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-hidden ">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
