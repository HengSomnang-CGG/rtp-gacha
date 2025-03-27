// import type { MetaFunction } from "@remix-run/node";
import { useCallback, useEffect, useState } from "react";


import RtpGame from "~/components/RTP/RtpGame";
import data from "~/data/data.json";
import { Games } from "~/model/games";


// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  const [activeMenu, setActiveMenu] = useState<string>("Pragmatic Play");
  const [type, setType] = useState<string>("slot");
  const [games, setGames] = useState<Games[]>(data);
  
  const handleButtonclick = useCallback((menu: string) => {
    setActiveMenu(menu);
  }, [])

  const handleType = useCallback((type: string) => {
    setType(type);
  },[])

useEffect(() => {
    setGames(data.filter((game) => game.name === type));
}, [type])



  return (
    <>
      <div className="mx-auto lg:px-12 mb-5">
        <RtpGame handleButtonclick={handleButtonclick} activeMenu={activeMenu} type={type} handleType={handleType} filteredData={games} setActiveMenu={setActiveMenu}  />
      </div>    
    </>
  );
}


