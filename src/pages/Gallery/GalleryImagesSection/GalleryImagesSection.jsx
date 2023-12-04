import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import GalleryCard from "../GalleryCard/GalleryCard";

const GalleryImagesSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data: gallery = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {gallery?.map((item) => (
        <GalleryCard key={item._id} image={item?.image}></GalleryCard>
      ))}
    </div>
  );
};

export default GalleryImagesSection;

// import { useInfiniteQuery } from "@tanstack/react-query";
// import InfiniteScroll from "react-infinite-scroll-component";

// const getArticles = async ({ pageParam = 0 }) => {
//   const res = await fetch(
//     `https://fitness-forge-server.vercel.app/gallery?limit=10&offset=${pageParam}`
//   );
//   const data = await res.json();

//   return { ...data, prevOffset: pageParam };
// };

// const GalleryImagesSection = () => {
//   const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
//     queryKey: ["gallery"],
//     queryFn: getArticles,
//     getNextPageParam: (lastPage) => {
//       if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
//         return false;
//       }
//       return lastPage.prevOffset + 10;
//     },
//   });
//   console.log(data);

//   const articles = data?.pages.reduce((acc, page) => {
//     return [...acc, ...page];
//   }, []);

//   //   console.log(articles);

//   return (
//     <div>
//       {/* <InfiniteScroll
//         dataLength={articles ? articles.length : 0}
//         next={() => fetchNextPage()}
//         hasMore={hasNextPage}
//         loading={<div>Loading...☝️</div>}
//       >
//         <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
//           {articles &&
//             articles.map((article, idx) => {
//               return (
//                 <div className="border-2 p-2 bg-slate-200 rounded" key={idx}>
//                   <p className="text-2xl font-semibold bg-black flex justify-center items-center w-10 h-10 rounded-full text-white">
//                     {idx + 1}
//                   </p>
//                   <h3>{article.description}</h3>
//                 </div>
//               );
//             })}
//         </div>
//       </InfiniteScroll> */}
//     </div>
//   );
// };

// export default GalleryImagesSection;
