import { useParams } from "react-router-dom";
import Header from "./Sheared/Header";
import RightSideNav from "./Sheared/RightSideNav";
import Navber from "./Sheared/Navber";


const News = () => {
  const {_id} = useParams();
  return (
    <div>
      <Header></Header>
      <Navber></Navber>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-3xl">Detail</h1>
          <p>{_id}</p>
        </div>
        <div>
      <RightSideNav></RightSideNav>
        </div>
      </div>
      
    </div>
  );
};

export default News;