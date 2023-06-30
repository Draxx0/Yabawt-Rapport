import { useEffect, useRef, useState } from "react";
import MissionRow from "./MissionRow";
import MissionTasks from "./MissionTasks";
import ticketrzMissionsData from "../data/ticketrzMissions.json"
import webmarketerMissionsData from "../data/webmarketerMissions.json"
import { gsap } from "gsap";
import MissionPictures from "./MissionPictures";

type Mission = "webmarketer" | "ticketrz"

const Missions = ({ sectionName }: { sectionName: string; }) => {
  const [mission, setMission] = useState<Mission>("ticketrz")
  const containerRef = useRef<HTMLDivElement>(null)

  const { ticketrzMissions, ticketrzPictures }: { ticketrzMissions: Array<{ text: string }>; ticketrzPictures: Array<{ path: string }> } = ticketrzMissionsData;
  const { webmarketerMissions, webmarketerPictures }: { webmarketerMissions: Array<{ text: string }>; webmarketerPictures: Array<{ path: string }> } = webmarketerMissionsData;
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        y: 20,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [])

  return (
    <section className="container pt-14 md:pt-28" id={sectionName} ref={containerRef}>
      <h2 className="text-2xl w-fit font-bold mb-4 relative z-10 before:[] before:w-1/2 before:h-2 before:absolute before:left-0 before:bottom-[0.15rem] before:bg-red before:opacity-40">Mes missions</h2>
      <p className="font-medium">J’ai au cours de mon stage pu intervenir sur deux projets, tous deux étaient montés en NestJS Typescript pour le back et React Typescript pour le front. J’ai donc, lors des missions que j’ai pu réaliser  sur ces deux projets, travailler en frontend et en backend, j’ai eu l’occasion de toucher à tout !</p>

      <div className="flex gap-10 mt-20">
        <p className="text-xl font-semibold cursor-pointer group relative" onClick={() => setMission("webmarketer")}>Webmarketer  <span className={`${mission === "webmarketer" ? "w-2/3" : "w-0"} h-[0.20rem] rounded bg-red absolute left-1/2 -translate-x-1/2 -bottom-2 group-hover:w-2/3 transition-all ease-in-out duration-200`}></span></p>
        <p className="text-xl font-semibold cursor-pointer group relative" onClick={() => setMission("ticketrz")}>Ticketrz  <span className={`${mission === "ticketrz" ? "w-2/3" : "w-0"} h-[0.20rem] rounded bg-red absolute left-1/2 -translate-x-1/2 -bottom-2 group-hover:w-2/3 transition-all ease-in-out duration-200`}></span></p>
      </div>

      {mission === "webmarketer" ? (
        <>
          <MissionRow imageUrl="https://via.placeholder.com/400" displayingText="left" subtitle="Webmarketer" text="Webmarketer est un produit SaaS développé depuis 2017 par l’agence Yabawt il permet d’analyser facilement ses dépenses marketing, avec Webmarketer il est possible d’analyser en détail l’ensemble de ses campagnes dans un référentiel unique & impartial." />
          <MissionRow imageUrl="https://via.placeholder.com/400" displayingText="right" subtitle="Micro-service" text="Webmarketer se présente sous la forme d’un micro service" />
          <MissionTasks title="Webmarketer représente la moitié de mes missions sur la durée de mon stage, voici la liste des missions qui m’ont été assignées :">
            <div className="flex flex-col gap-3 mt-3">



              <ul className="pl-4 my-4 flex flex-col gap-2">
                {webmarketerMissions.map((mission, index) => (
                  <li className="mission" key={index}>
                    {mission.text}
                  </li>
                ))}
              </ul>


              <p>Ces missions ont toutes été très enrichissantes, celle qui m’ont donné le plus de fil à retordre ont été les deux premières, elles me demander
                de développer des algorythmes plutôt complexes. Chaque mission m’a permis d’améliorer ma logique, mais chacune m’a
                également former sur :</p>

              <ul>
                {webmarketerMissions.slice(0, 3).map((mission, index) => (
                  <li className="mission" key={index}>
                    {mission.text}
                  </li>
                ))}
              </ul>

              <p>J’ai pour le coup pris un grand plaisir sur mes missions données Webmarketer, tout d’abord parce que le projet est très très vaste et requiert un
                code irréprochable. Travailler sur Webmarketer m’a permis de développer une certaine rigueur dans mon code, bien repasser sur chacun de mes
                bouts de codes pour être certain qu’ils étaient adapté au besoin et qu’ils respecter un principe de “clean code”.</p>

              <p>
                Cela n’a pour autant pas été simple, la première difficulté fût d’assimiler les principes de Webmarker, il vaut mieux comprendre le service avant de
                travailler dessus, vous en conviendrez.</p>

              <MissionPictures pictures={webmarketerPictures} />
            </div>
          </MissionTasks>
        </>
      ) : (
        <>
          <MissionRow imageUrl="/assets/images/ticketrz-image.png" displayingText="left" subtitle="Ticketrz" text="Ticketrz est une web-application développé par Yabawt lors de la période de Covid-19, elle permet aux clients de Yabawt d’ouvrir des “tickets” permettant d’exprimer leurs besoins par le biais d’une discussion écrite. Ticketrz a été développé pour centraliser les questions des clients sur une même plateforme en les catégorisant par projet." />

          <MissionTasks title="Mon travail fut de développer de nouvelles fonctionnalités et de corriger des bugs connus de la web app.">
            <div className="flex flex-col gap-3 mt-3">
              <p>Cahier des charges en main je me suis directement mis au travail, à vrai dire l’idée de travailler sur ce projet me plaisait. En effet quelques mois en arrière j’avais eu l’envie de développer une web-app similaire me permettant simplement de m’améliorer en développent chez moi, mais par manque de temps je n’avais pas concrétisé cette application. </p>

              <div className="flex flex-col gap-2">
                <p className="">Cette mission m’a permis de travailler sur plusieurs résolutions de bug & intégrations de fonctionnalités très intéressantes notamment :</p>

                <ul className="pl-4 my-4 flex flex-col gap-2">
                  {ticketrzMissions.map((mission, index) => (
                    <li className="mission" key={index}>
                      {mission.text}
                    </li>
                  ))}
                </ul>
              </div>

              <p>L’intégration de Tiptap, l’outil WYSIWYG (what you see is what you get) a été ma tâche favorite ! Un outil WYSIWYG est un outil semblable à celui que l’on pourrait retrouver dans les logiciels de traitement de texte comme Word par exemple, il permet à l’utilisateur d’avoir une barre d’outil lui donnant accès à tout un tas d’options, comme celles de mise en gras, de texte italic, de surlignage de texte et bien d’autres...
                J’ai eu pour mission de l’intégrer à la place des simples champs de textes présents sur les formulaires d’ajout de message et d’ajout de ticket.
                La librarie Tiptap étant plutôt bien faites je n’ai pas eu trop de difficultés à l’intégrer mais j’en ai pris un grand plaisir ! j’ai connecté le champ de texte Tiptap au state React qui accueillait les données du champ afin de par la suite les envoyer vers le backend.</p>

              <p>Au cours toutes ces missions j’ai pu rencontrer certaines difficultés, mais si je devais retenir une difficulté à surmonter c’est bien celle de l’abstraction. Réussir à isoler le gros problème en plusieurs petits, j’ai remarqué que j’avais encore du mal à faire cette répartition. Afin de résoudre ce souci, désormais je prends plus de temps avant de me jeter dans le code, quand j’ai pris connaissance du problème je réfléchis à un plan d’opérations pour résoudre le souci.</p>

              <MissionPictures pictures={ticketrzPictures} />
            </div>
          </MissionTasks>
        </>
      )}
    </section>
  );
}

export default Missions;