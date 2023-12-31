import Footer from "@/components/footer";
import Header from "@/components/header";
//import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] flex items-center justify-center overflow-hidden">
        <div className="z-[1550] flex flex-col justify-center items-center md:grid md:grid-cols-2 w-[90%] 2xl:w-[70%] text-white py-[3.75rem] md:py-[9.75rem]">
          <div className="flex items-center">
            <div className="text-center md:text-left">
              <h2 className="text-[Open_Sans] text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700] mb-8">
                <span className="font-[100]">Welcome to</span> Integrated Occupational Health Services!
              </h2>
              <div className="flex justify-center md:block">
                <Link
                  href="/contact-us"
                  className="flex justify-center items-center text-[1rem] bg-[#274fa7] hover:bg-[#244897] active:bg-[#274fa7] py-6 px-6 w-fit"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          </div>
        </div>
      </section>

      <section className="flex justify-center">
            <div className="w-[90%] lg:w-[80%] grid grid-cols-2">
              <div></div>
              <div></div>
            </div>
      </section>

      <Footer />
    </main>
  );
}
