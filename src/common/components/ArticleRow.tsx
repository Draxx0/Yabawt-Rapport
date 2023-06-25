import Button from "./Button";

const ArticleRowLeft = ({ children, articleSubtitle, hasButton = false }: { children: React.ReactElement, articleSubtitle: string; hasButton?: boolean }) => (
 <div className="flex flex-col gap-6 w-1/2">
  <h2 className="text-2xl font-bold">{articleSubtitle}</h2>
  {children}
  {hasButton && (
   <Button text="Découvrir" hasArrow />
  )}
 </div>
);

const ArticleRowRight = ({ children, imageUrl }: { children: React.ReactElement, imageUrl: string; }) => (
 <div className="flex flex-col gap-3 w-1/2">
  <div className="flex justify-center">
   <div className="relative">
    <img src={imageUrl} alt="" className="max-h-[32rem] rounded-md" />
    {children}
   </div>
  </div>
 </div>
);

const ArticleRow = ({ children }: { children: React.ReactElement }) => (
 <section className="container mx-auto py-14 md:py-28 flex space-between gap-10">
  {children}
 </section>
);

ArticleRow.Left = ArticleRowLeft;
ArticleRow.Right = ArticleRowRight;

export default ArticleRow;
