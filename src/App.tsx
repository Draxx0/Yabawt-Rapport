import ArticleHeader from "./common/components/ArticleHeader"
import ArticleRow from "./common/components/ArticleRow"
import Bloc from "./common/components/Bloc"
import Footer from "./common/components/Footer"
import Header from "./common/components/Header"
import Missions from "./components/Missions"
import Review from "./components/Review"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <>
      <Header />

      <ArticleHeader articleTitle="Dans la peau d’un développeur Fullstack JS" articleFrom="William FORT" articleFromUrl="https://www.linkedin.com/in/william-fort/" articleFromIcon="me.jpg" />

      <ArticleRow sectionName="presentation">
        <>
          <ArticleRow.Text articleSubtitle="Aujourd’hui, parlons développement." hasButton textButton="Découvrir">
            <div className="flex flex-col gap-3">
              <p className="font-medium">Je suis FORT William, étudiant en deuxième années de développement web à l’ESD de Bordeaux. Passionnés par le web je cherchais à mettre en oeuvre les
                compétences que j’ai pu acquérir lors de ma formation ainsi qu’au cours de mes heures de développement sur des projets personnels.</p>
              <p className="font-medium">Et c’est auprès de l’entreprise Yabawt que j’ai pu mettre à l’épreuve ses compétences lors d’un stage afin de découvrir le  monde fantastique du développement web fullstack.</p>
            </div>
          </ArticleRow.Text>
          <ArticleRow.Image imageUrl="me.jpg">
            <>
              <Bloc imageUrl="/assets/icons/nest.svg" className="-left-12 -top-5" hasImage />
              <Bloc imageUrl="/assets/icons/docker.svg" className="-left-12 bottom-16" hasImage />
              <Bloc imageUrl="/assets/icons/react.svg" className="-right-12 top-16" hasImage />
              <Bloc imageUrl="/assets/icons/postgres.svg" className="right-8 -bottom-8" hasImage />
            </>
          </ArticleRow.Image>
        </>
      </ArticleRow>

      <ArticleRow sectionName="yabawt">
        <>
          <ArticleRow.Image imageUrl="me.jpg">
            <>
              <Bloc imageUrl="/assets/icons/nest.svg" className="-left-12 -top-5" tooltipContent="Création de Yabawt."><p className="text-red font-bold text-xl cursor-help">2013</p></Bloc>
              <Bloc imageUrl="/assets/icons/docker.svg" className="-left-12 bottom-16" tooltipContent="Sud ouest investit dans Yabawt."><p className="text-red font-bold text-xl cursor-help">2017</p></Bloc>
              <Bloc imageUrl="/assets/icons/react.svg" className="-right-12 top-16" tooltipContent="Désigné comme entreprise innovante."><p className="text-red font-bold text-xl cursor-help">2018</p></Bloc>
            </>
          </ArticleRow.Image>
          <ArticleRow.Text articleSubtitle="Yabawt" hasButton textButton="Voir plus">
            <p className="font-medium">En 2013, l'histoire de Yabawt commence avec la fusion des talents de trois co-fondateurs, donnant naissance à une agence digitale. Leur objectif était de fournir des solutions uniques, adaptées à chaque secteur d'activité, afin d'aider leurs clients à se démarquer de la concurrence. Quatre ans plus tard, une nouvelle phase débute lorsque le Groupe Sud-Ouest investit dans Yabawt. Cette collaboration permet à Yabawt d'étendre son influence et d'offrir à ses clients une expertise enrichie, puisée dans le savoir-faire et l'expérience du Groupe Sud-Ouest. En 2018, Yabawt reçoit une reconnaissance significative en étant officiellement désignée comme une entreprise innovante, bénéficiant du soutien de partenaires de premier plan, la Région Nouvelle Aquitaine, la BP et Theophraste.</p>
          </ArticleRow.Text>
        </>
      </ArticleRow >

      <Missions />

      <Testimonials />

      <Review />

      <Footer />
    </>
  )
}

export default App
