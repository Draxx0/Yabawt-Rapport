import { useEffect, useRef, useState } from "react";
import MissionRow from "./MissionRow";
import MissionTasks from "./MissionTasks";
import ticketrzMissionsData from "../data/ticketrzMissions.json"
import webmarketerMissionsData from "../data/webmarketerMissions.json"
import { gsap } from "gsap";
import MissionPictures from "./MissionPictures";

type Mission = "webmarketer" | "ticketrz"

const Missions = ({ sectionName }: { sectionName: string; }) => {
  const [mission, setMission] = useState<Mission>("webmarketer")
  const containerRef = useRef<HTMLDivElement>(null)

  const { ticketrzMissions, ticketrzPictures }: { ticketrzMissions: Array<{ text: string }>; ticketrzPictures: Array<{ path: string; tooltipLabel: string; }> } = ticketrzMissionsData;
  const { webmarketerMissions, webmarketerPictures, webmarketerLearns }: { webmarketerMissions: Array<{ text: string }>; webmarketerPictures: Array<{ path: string; tooltipLabel: string; }>; webmarketerLearns: Array<{ text: string }> } = webmarketerMissionsData;
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
          <MissionRow imageUrl="/assets/images/webmarketer/webmarketer-explained.png" displayingText="left" subtitle="Webmarketer" text="Webmarketer est un produit SaaS développé depuis 2017 par l’agence Yabawt il permet d’analyser facilement ses dépenses marketing, avec Webmarketer il est possible d’analyser en détail l’ensemble de ses campagnes dans un référentiel unique & impartial.">
            <>
              <p>Le service permet à son utilisateur d’analyser la rentabilité de ses canaux d’acquisitions telle qu’une campagne Google Ads, une publicité Facebook ads et bien d’autres. L’objectif de Webmarketer est de permettre aux utilisateurs d’orienter leurs dépenses vers les canaux et supports leurs offrants un réel retour sur investissement.</p>
            </>
          </MissionRow>
          <MissionRow displayingText="right" subtitle="Fonctionnalités" text="Webmarketer embarque plusieurs fonctionnalités tels que :">
            <>
              <ul className="pl-4 my-4 flex flex-col gap-2">
                <li className="bullet-li">La collecte de données, permettant d’agréger la totalité des données marketing de l’utilisateur dans un référentiel centralisé et impartial.</li>
                <li className="bullet-li">L’analyse de ses campagnes marketing, permet l’analyse avec précision de la rentabilité des campagnes menées.</li>
                <li className="bullet-li">Les modèles d’attributions, permettant d’utiliser ou de créer de nouveau modèles d’attributions permettant de répartir l’importance de l’action menée sur le site de l’utilisateur.</li>
                <li className="bullet-li">L’analyse de la customer journey, permet de dresser une customer journey de tous les utilisateurs de son site.</li>
                <li className="bullet-li">La Data visualisation, Permet de visualiser ses KPI dans des tableaux entièrement personnalisables.</li>
              </ul>
              <img src="/assets/images/webmarketer/Webmarketer-app.jpg" alt="" />
            </>
          </MissionRow>
          <MissionRow imageUrl="/assets/images/webmarketer/micro.png" displayingText="left" subtitle="Micro-services" text="Webmarketer est dévelopé en sous formes de micro-services. Le développement en microservices est une approche de développement où une application est décomposée en plusieurs services indépendants et autonomes, appelés microservices. Chaque microservice est conçu pour accomplir une tâche spécifique de l'application et communique avec les autres microservices via des API bien définies. Les microservices sont généralement développés, déployés et mis à l'échelle de manière indépendante, ce qui permet une plus grande flexibilité et une évolutivité accrue de l'application dans son ensemble.">
            <p>Cette approche facilite également la maintenance, la mise à jour et le déploiement continu des différents composants de l'application. En résumé, le développement en microservices favorise une architecture modulaire et distribuée, permettant de créer des applications flexibles, évolutives et résilientes.</p>
          </MissionRow>
          <MissionTasks title="Webmarketer représente la moitié de mes missions sur la durée de mon stage, voici la liste des missions qui m’ont été assignées :">
            <div className="flex flex-col gap-3 mt-3">

              <ul className="pl-4 my-4 flex flex-col gap-2">
                {webmarketerMissions.map((mission, index) => (
                  <li className="bullet-li" key={index}>
                    {mission.text}
                  </li>
                ))}
              </ul>

              <p>Ces missions ont toutes été très enrichissantes, celle qui m’ont donné le plus de fil à retordre ont été les deux premières, elles me demander
                de développer des algorythmes plutôt complexes. Chaque mission m’a permis d’améliorer ma logique et ma permis de me former sur les sujets tels que :</p>

              <ul className="pl-4 my-4 flex flex-col gap-2">
                {webmarketerLearns.map((mission, index) => (
                  <li className="bullet-li" key={index}>
                    {mission.text}
                  </li>
                ))}
              </ul>

              <p>J’ai pour le coup pris un grand plaisir sur mes missions Webmarketer, tout d’abord parce que le projet est très, très vaste et requiert un
                code irréprochable. Travailler sur Webmarketer m’a permis de développer une certaine rigueur dans mon code, bien repasser sur chacun de mes
                bouts de codes pour être certain qu’ils étaient adapté au besoin et qu’ils respectaient un principe les principes du “clean code”.</p>

              <p>
                Cela n’a pour autant pas été simple, la première difficulté fût d’assimiler ce qu'était Webmarker ce qu'il propose, il vaut mieux comprendre le service avant de
                travailler dessus, vous en conviendrez.</p>

              <MissionPictures pictures={webmarketerPictures} />
            </div>
          </MissionTasks>
        </>
      ) : (
        <>
          <MissionRow imageUrl="/assets/images/ticketrz-image.png" displayingText="left" subtitle="Ticketrz" text="Ticketrz est une web-application développé par Yabawt lors de la période du Covid-19, elle permet aux clients de Yabawt d’ouvrir des “tickets” permettant d’exprimer leurs besoins par le biais d’une discussion écrite. Ticketrz a été développé pour centraliser les questions des clients sur une même plateforme en les catégorisant par projet." />

          <MissionTasks title="Mon travail fut de développer de nouvelles fonctionnalités et de corriger des bugs connus de la web app.">
            <div className="flex flex-col gap-3 mt-3">
              <p>Cahier des charges en main je me suis directement mis au travail, à vrai dire l’idée de travailler sur ce projet me plaisait. En effet quelques mois en arrière j’avais eu l’envie de développer une web-app similaire me permettant simplement de m’améliorer en développent chez moi, mais par manque de temps je n’avais pas concrétisé cette application. </p>

              <div className="flex flex-col gap-2">
                <p className="">Cette mission m’a permis de travailler sur plusieurs résolutions de bug & intégrations de fonctionnalités très intéressantes notamment :</p>

                <ul className="pl-4 my-4 flex flex-col gap-2">
                  {ticketrzMissions.map((mission, index) => (
                    <li className="bullet-li" key={index}>
                      {mission.text}
                    </li>
                  ))}
                </ul>
              </div>

              <p>L’intégration de Tiptap, l’outil WYSIWYG (what you see is what you get) a été ma tâche favorite ! Un outil WYSIWYG est un outil semblable à celui que l’on pourrait retrouver dans les logiciels de traitement de texte comme Word par exemple, il permet à l’utilisateur d’avoir une barre d’outil lui donnant accès à tout un tas d’options, comme celles de mise en gras, de texte italic, de surlignage de texte et bien d’autres...
                J’ai eu pour mission de l’intégrer à la place des simples champs de textes présents sur les formulaires d’ajout de message et d’ajout de ticket.
                La librarie Tiptap étant plutôt bien faites je n’ai pas eu trop de difficultés à l’intégrer mais j’en ai pris un grand plaisir ! j’ai connecté le champ de texte Tiptap au state React qui accueillait les données du champ afin de par la suite les envoyer vers le backend.</p>

              <p>Au cours toutes ces missions j’ai pu rencontrer certaines difficultés, mais si je devais retenir une difficulté à surmonter par dessus tout c’est bien celle de l’abstraction. Réussir à isoler le gros problème en plusieurs petits, j’ai remarqué que j’avais encore du mal à faire cette répartition. Afin de résoudre ce souci, désormais je prends plus de temps avant de me jeter dans le code, quand j’ai pris connaissance du problème je réfléchis à un plan d’opérations pour résoudre le souci.</p>

              <MissionPictures pictures={ticketrzPictures} />
            </div>
          </MissionTasks>
        </>
      )}
    </section>
  );
}

export default Missions;