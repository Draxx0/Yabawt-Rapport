import Button from "./Button";

const ArticleRowText = ({ children, articleSubtitle, hasButton = false, textButton = "Découvrir", url }: { children: React.ReactElement, articleSubtitle: string; hasButton?: boolean, textButton?: string; url?: string; }) => (
 <div className="flex flex-col gap-6 w-full md:w-1/2">
  <h2 className="text-2xl w-fit font-bold relative z-10 before:[] before:w-1/2 before:h-2 before:absolute before:left-0 before:bottom-[0.15rem] before:bg-red before:opacity-40">{articleSubtitle}</h2>
  {children}
  {(hasButton && textButton) && (
   <Button text={textButton} hasArrow url={url} />
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
