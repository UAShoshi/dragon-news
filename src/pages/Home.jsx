import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Sheared/Header";
import LeftSideNav from "./Sheared/LeftSideNav";
import Navber from "./Sheared/Navber";
import RightSideNav from "./Sheared/RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navber></Navber>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div><LeftSideNav></LeftSideNav></div>
        {/* News Conteiner */}
        <div className="md: col-span-2 ">
          {
            news.map(aNews =><NewsCard key={aNews.id} news={aNews}></NewsCard>)
          }
        </div>
        <div><RightSideNav></RightSideNav></div>
      </div>
    </div>
  );
};

export default Home;