import Button from "./Button";

const ArticleRowText = ({ children, articleSubtitle, hasButton = false, textButton = "Découvrir" }: { children: React.ReactElement, articleSubtitle: string; hasButton?: boolean, textButton?: string; }) => (
 <div className="flex flex-col gap-6 w-full md:w-1/2">
  <h2 className="text-2xl font-bold">{articleSubtitle}</h2>
  {children}
  {(hasButton && textButton) && (
   <Button text={textButton} hasArrow />
  )}
 </div>
);

const ArticleRowImage = ({ children, imageUrl }: { children: React.ReactElement, imageUrl: string; }) => (
 <div className="flex flex-col gap-3 w-full md:w-1/2">
  <div className="flex justify-center">
   <div className="relative">
    <img src={imageUrl} alt="" className="max-h-[32rem] object-cover rounded-md" />
    {children}
   </div>
  </div>
 </div>
);

const ArticleRow = ({ sectionName, children }: { sectionName: string; children: React.ReactElement }) => (
 <section className="container pt-14 md:pt-28 flex space-between gap-20 md:gap-10 flex-col-reverse md:flex-row" id={sectionName}>
  {children}
 </section>
);

ArticleRow.Text = ArticleRowText;
ArticleRow.Image = ArticleRowImage;

export default ArticleRow;
