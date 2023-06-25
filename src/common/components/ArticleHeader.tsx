type Props = {
 articleTitle: string;
 articleSubtitle?: string;
 articleFrom: string;
 articleFromIcon: string;
 articleFromUrl?: string;
}

const ArticleHeader = ({ articleTitle, articleFrom, articleFromIcon, articleFromUrl }: Props) => {
 return (
  <section className="container pt-14 md:pt-28">
   <h1 className="text-3xl font-bold pb-4">{articleTitle}</h1>
   <div className="flex items-center gap-2">
    <p className="text-gray-600">Un article-reportage de <a className="underline font-semibold" target="_blank" href={articleFromUrl}>{articleFrom}</a></p>
    <img className="w-10 h-10 border-[1.5px] border-red object-cover rounded-full" src={articleFromIcon} alt="" />
   </div>
  </section>
 );
}

export default ArticleHeader;