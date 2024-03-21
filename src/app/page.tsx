"use client";
import Hero from "@/app/components/hero/Hero";
import Overview from "./components/overview/overview";
import Testimonials from "./services/components/testimonials";
import HeroBaking from "./services/components/HeroBaking";

export default function Home() {
  return (
    <>
      <div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <Hero />
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <Overview />
        </div>
        <div className="mt-20 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <HeroBaking />
        </div>
        <div className="mt-20 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
