import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Review = ({ sectionName }: { sectionName: string; }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        x: 20,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [])
  return (
    <section className="container py-14 md:py-28" id={sectionName} ref={containerRef}>
      <h2 className="text-2xl mb-4 w-fit font-bold relative z-10 before:[] before:w-1/2 before:h-2 before:absolute before:left-0 before:bottom-[0.15rem] before:bg-red before:opacity-40">Bilan d’expérience</h2>
      <div className="flex flex-col space-y-4">
        <p className="font-medium">C’est ainsi que mon expérience en tant que développeur web fullstack js se termine auprès de l’agence Yabawt.</p>
        <p className="font-medium">  Ce stage m’aura permis dans un premier temps de mettre en oeuvre les compétences acquises au cours de ma formation,de consolider celles que je posséder déjà mais surtout
          d'apprendre un grand nombres de choses.
        </p>
        <p className="font-medium"> Mis à part le fort apport en compétences, ce stage rhymé avec bonne ambiance, il n’y a pas un seul moment ou je me suis sentis mis de côté
          au contraire je me suis sentis comme vite intégrés, et dans un groupe de travail c’est très important, c’est ce qui entre autres m’a permis de vite
          prendre mes marques et de pouvoir me concentrer sur le travail demandé.</p>
        <p className="font-medium">
          Je souhaite en dernier lieu remercier Yabawt pour son accueil bienveillante et évidemment remercier l’équipe technique avec laquelle j’ai passé trois mois
          intensément formateur. Ce fût une expérience très enrichissante que je souhaite à tout futur développeur !</p>
        <p className="font-medium">
          Je repars plein de motivation et prêt à donner le meilleur de moi-même pour l’avenir.</p>
      </div>
    </section >
  );
}

export default Review;