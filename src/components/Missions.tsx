import { useState } from "react";
import ArticleRow from "./common/ArticleRow";

type Mission = "webmarketer" | "ticketrz"

const Missions = ({ sectionName }: { sectionName: string; }) => {
  const [mission, setMission] = useState<Mission>("webmarketer")
  return (
    <section className="container pt-14 md:pt-28" id={sectionName}>
      <h2 className="text-2xl w-fit font-bold mb-4 relative z-10 before:[] before:w-1/2 before:h-2 before:absolute before:left-0 before:bottom-[0.15rem] before:bg-red before:opacity-40">Mes missions</h2>
      <p className="font-medium">J’ai au cours de mon stage pu intervenir sur deux projets, tous deux étaient montés en NestJS Typescript pour le back et React Typescript pour le front. J’ai donc, lors des missions que j’ai pu réaliser  sur ces deux projets, travailler en frontend et en backend, j’ai eu l’occasion de toucher à tout !</p>

      <div className="flex gap-10 mt-20">
        <p className="text-xl font-semibold cursor-pointer group relative">Webmarketer  <span className="w-0 h-[0.20rem] rounded bg-red absolute left-1/2 -translate-x-1/2 -bottom-2 group-hover:w-2/3 transition-all ease-in-out duration-200"></span></p>
        <p className="text-xl font-semibold cursor-pointer group relative">Ticketrz  <span className="w-0 h-[0.20rem] rounded bg-red absolute left-1/2 -translate-x-1/2 -bottom-2 group-hover:w-2/3 transition-all ease-in-out duration-200"></span></p>
      </div>

      {mission === "webmarketer" ? (
        <>
          <div className="mt-20 flex justify-between">
            <div className="flex flex-col gap-7 w-1/2">
              <div className="flex items-center gap-5">
                <img src="https://via.placeholder.com/40" alt="" />
                <p className="text-2xl font-semibold">Webmarketer</p>
              </div>

              <p>Webmarketer est un produit SaaS développé depuis 2017 par l’agence Yabawt il permet d’analyser facilement ses dépenses marketing, avec Webmarketer il est possible d’analyser en détail l’ensemble de ses campagnes dans un référentiel unique & impartial.</p>
            </div>

            <div className="w-1/2">
              <img src="https://via.placeholder.com/300" alt="" className="mx-auto" />
            </div>
          </div>

          <div className="mt-20 flex flex-row-reverse justify-between">
            <div className="flex flex-col gap-7 w-1/2">
              <div className="flex items-center gap-5">
                <p className="text-2xl font-semibold">Webmarketer</p>
              </div>

              <p>Webmarketer est un produit SaaS développé depuis 2017 par l’agence Yabawt il permet d’analyser facilement ses dépenses marketing, avec Webmarketer il est possible d’analyser en détail l’ensemble de ses campagnes dans un référentiel unique & impartial.</p>
            </div>

            <div className="w-1/2">
              <img src="https://via.placeholder.com/300" alt="" className="mx-auto" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Missions;