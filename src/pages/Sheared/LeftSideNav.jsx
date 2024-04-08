import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import category1 from '../../assets/1.png';
import category2 from '../../assets/2.png';
import category3 from '../../assets/3.png';


const LeftSideNav = () => {
  const [categories, setCategories] = useState ([]);

  useEffect( () =>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  return (
    <div className="space-y-9">
      <h1 className="text-2xl font-bold">All Caterogy</h1>
      {
        categories.map(category => <Link key={category.id} className="block ml-4 text-xl font-semibold" to={`/category/${category.id}`}>{category.name}</Link>)
      }
      <div className="p-4 space-y-3 mb-6">
        <img src={category1} alt="" />
        <h1 className="font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</h1>
        <img src={category2} alt="" />
        <h1 className="font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</h1>
        <img src={category3} alt="" />
        <h1 className="font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</h1>
      </div>
    </div>
  );
};

export default LeftSideNav;