import Button from "./Button";

const ArticleRowText = ({ children, articleSubtitle, hasButton = false, textButton = "Découvrir" }: { children: React.ReactElement, articleSubtitle: string; hasButton?: boolean, textButton?: string; }) => (
 <div className="flex flex-col gap-6 w-1/2">
  <h2 className="text-2xl font-bold">{articleSubtitle}</h2>
  {children}
  {(hasButton && textButton) && (
   <Button text={textButton} hasArrow />
  )}
 </div>
);

const ArticleRowImage = ({ children, imageUrl }: { children: React.ReactElement, imageUrl: string; }) => (
 <div className="flex flex-col gap-3 w-1/2">
  <div className="flex justify-center">
   <div className="relative">
    <img src={imageUrl} alt="" className="max-h-[32rem] object-cover rounded-md" />
    {children}
   </div>
  </div>
 </div>
);

const ArticleRow = ({ sectionName, children }: { sectionName: string; children: React.ReactElement }) => (
 <section className="container py-14 md:py-28 flex space-between gap-10" id={sectionName}>
  {children}
 </section>
);

ArticleRow.Text = ArticleRowText;
ArticleRow.Image = ArticleRowImage;

export default ArticleRow;
