import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

type Props = {
 articleTitle: string;
 articleSubtitle?: string;
 articleFrom: string;
 articleFromIcon: string;
 articleFromUrl?: string;
}

const ArticleHeader = ({ articleTitle, articleFrom, articleFromIcon, articleFromUrl }: Props) => {
 const containerRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (containerRef.current) {
   const ourText = SplitType.create(containerRef.current, { types: 'chars' })
   const ctx = gsap.context(() => {
    gsap.fromTo(
     ourText.chars,
     {
      y: 10,
      opacity: 0
     },
     {
      y: 0,
      opacity: 1,
      stagger: 0.035,
      duration: 1,
      delay: 1,
      ease: 'power4.out',
     }
    )
   }, containerRef);
   return () => ctx.revert();
  }
 }, [])

 return (
  <section className="container pt-48">
   <h1 className="text-3xl font-bold pb-4" ref={containerRef}>{articleTitle}</h1>
   <div className="flex items-center gap-2">
    <p className="text-gray-600">Un article-reportage de <a className="underline font-semibold" target="_blank" href={articleFromUrl}>{articleFrom}</a></p>
    <img className="w-10 h-10 border-[1.5px] border-red object-cover rounded-full" src={articleFromIcon} alt="" />
   </div>
  </section>
 );
}

export default ArticleHeader;