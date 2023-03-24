import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import { Provider } from "./Context";
import { BoisonCH, Cocktail,Milkshake,Jus,Salés,sucrés,Salades,desserts,gateaux,BoissonsF,Glaces} from "./data";

import "./styles.css";

export default function App() {
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <aside className="aside2">
        <Mains type="Nos Boissons Chaudes" items={BoisonCH}/>
        <Mains type="Nos Boissons Fraiches" items={BoissonsF}/>
        <Mains type="Nos Encas salé" items={Salés}/>
        <Mains type="Nos Salades" items={Salades}/>
        <Mains type="Nos desserts" items={desserts}/>
        </aside>
        <aside className="aside">
          <Extras type="Nos Cocktails" items={Cocktail} />
          <Extras type="Nos Milkshake" items={Milkshake} />
          <Extras type="Nos Jus Naturels" items={Jus} /> 
          <Extras type="Nos Encas Sucrés" items={sucrés}/>
          <Extras type= "Nos Glaces" items={Glaces}/>
          <Extras type="Nos Gateaux" items ={gateaux}/>
        </aside>
        <Total />
      </div>
    </Provider>
  );
} 
