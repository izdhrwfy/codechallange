import { testimonials } from "../kelas";

export default function Testimonials() {
  return (
    <section className="text-center">
      <h1 className="text-center font-bold text-4xl text-amber-900">
        Testimoni Venanda
        <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
      </h1>
      <div className="pl-6 pr-6 pt-10 flex flex-col items-center justify-center mb-5">
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {testimonials.map((testimonial) => (
            <div className="mb-12 md:mb-0" key={testimonial.name}>
              <p className="mb-4 text-gray-500">{testimonial.testi}</p>

              <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                {testimonial.city}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
