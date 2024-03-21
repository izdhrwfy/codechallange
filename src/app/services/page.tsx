import BakingClass from "./components/Bakingclass";
import Testimonials from "./components/testimonials";

export default function Services() {
  return (
    <>
      <div className="mt-40 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <BakingClass />
      </div>
      <div className="mt-40 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <Testimonials />
      </div>
    </>
  );
}
