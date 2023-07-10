import { TestimonialInterface } from "./Testimonials";

const Testimonial = ({ testimonial }: { testimonial: TestimonialInterface }) => {
  return (
    <div className="bg-white w-full md:w-1/2 p-12 rounded-lg shadow-lg relative flex flex-col justify-between gap-4">
      <div>
        <div className="flex xl:items-center gap-2 flex-col xl:flex-row">
          <p className="font-medium text-2xl">{testimonial.name}</p>
          <span className="hidden xl:block">-</span>
          <p className="font-medium text-md text-red">{testimonial.grade}</p>
        </div>
        {<p className="text-gray-500 font-medium">{testimonial.special}</p> ?? null}
      </div>
      <p className="font-medium">{testimonial.notice}</p>
      <img src={testimonial.pp} alt="" className="w-14 h-14 rounded-full border-2 border-red absolute -left-3 -top-1" />
    </div>
  );
}

export default Testimonial;