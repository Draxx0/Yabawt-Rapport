import ArticleHeader from "./common/components/ArticleHeader"
import ArticleRow from "./common/components/ArticleRow"
import Bloc from "./common/components/Bloc"
import Header from "./common/components/Header"

const App = () => {
  return (
    <>
      <Header />

      <ArticleHeader articleTitle="Dans la peau d’un développeur Fullstack JS" articleFrom="William FORT" articleFromUrl="https://www.linkedin.com/in/william-fort/" articleFromIcon="me.jpg" />

      <ArticleRow>
        <>
          <ArticleRow.Left articleSubtitle="Aujourd’hui, parlons développement." hasButton>
            <div className="flex flex-col gap-3">
              <p className="font-medium">Je suis FORT William, étudiant en deuxième années de développement web à l’ESD de Bordeaux. Passionnés par le web je cherchais à mettre en oeuvre les
                compétences que j’ai pu acquérir lors de ma formation ainsi qu’au cours de mes heures de développement sur des projets personnels.</p>
              <p className="font-medium">Et c’est auprès de l’entreprise Yabawt que j’ai pu mettre à l’épreuve ses compétences lors d’un stage afin de découvrir le  monde fantastique du développement web fullstack.</p>
            </div>
          </ArticleRow.Left>
          <ArticleRow.Right imageUrl="me.jpg">
            <>
              <Bloc imageUrl="/assets/icons/nest.svg" className="-left-12 -top-5" />
              <Bloc imageUrl="/assets/icons/docker.svg" className="-left-12 bottom-16" />
              <Bloc imageUrl="/assets/icons/react.svg" className="-right-12 top-16" />
              <Bloc imageUrl="/assets/icons/postgres.svg" className="right-8 -bottom-8" />
            </>
          </ArticleRow.Right>
        </>
      </ArticleRow>
    </>
  )
}

export default App
