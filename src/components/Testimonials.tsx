import testimonialsJson from "../data/testimonials.json";
import Testimonial from "./Testimonial";

export interface TestimonialInterface {
 name: string;
 grade: string;
 pp: string;
 special?: string;
 notice: string;
}

const Testimonials = () => {
 const { testimonials }: {
  testimonials: TestimonialInterface[]
 } = testimonialsJson;
 return (
  <section className="container pt-14 md:pt-28">
   <h2 className="text-2xl font-bold mb-16 ">Quelques retours</h2>

   <div className="flex justify-between gap-10 flex-col md:flex-row">
    {testimonials.map((testimonial, index) => (
     <Testimonial key={index} testimonial={testimonial} />
    ))}
   </div>
  </section>
 );
}

export default Testimonials;