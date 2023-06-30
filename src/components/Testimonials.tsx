import { useEffect, useRef } from "react";
import testimonialsJson from "../data/testimonials.json";
import Testimonial from "./Testimonial";
import { gsap } from "gsap";

export interface TestimonialInterface {
 name: string;
 grade: string;
 pp: string;
 special?: string;
 notice: string;
}

const Testimonials = ({ sectionName }: { sectionName: string; }) => {
 const { testimonials }: {
  testimonials: TestimonialInterface[]
 } = testimonialsJson;
 const containerRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  const ctx = gsap.context(() => {
   gsap.from(containerRef.current, {
    scrollTrigger: {
     trigger: containerRef.current,
     start: "top center",
    },
    x: -20,
    duration: 1,
   });
  }, containerRef);

  return () => ctx.revert();
 }, [])
 return (
  <section className="container pt-14 md:pt-28" id={sectionName} ref={containerRef}>
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