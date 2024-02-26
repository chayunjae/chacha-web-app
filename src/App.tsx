import React, { useEffect, useState } from "react";
import BaseLayout from "./components/BaseLayout";
import MAINTOP from "./containers/MainTop";
import ABOUT from "./containers/About";
import ABOUT2 from "./containers/About2";
import PROJECT from './containers/Project'
import CONTACT from './containers/Contact'

function App() {
  //const [curPage, setCurPage] = useState<"INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC">('INDEX');
  const [globalTheme, setTheme] = useState(false)
  return (
    //     <BaseLayout
    //       curPage={curPage}
    //       setCurPage={setCurPage}
    //       globalTheme={globalTheme}
    //       setTheme={setTheme}
    //     >
    // 
    //       <div style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         // paddingTop: 90
    //       }}>
    //         <div>
    // 
    //         </div>
    //       </div>
    //     </BaseLayout>
    <BaseLayout
      globalTheme={globalTheme}
      setTheme={setTheme}>
      <div>
        <MAINTOP />
        <ABOUT />
        <div className="grad-trim pdt-30" />
        <ABOUT2 />
        <PROJECT />
        <div className="grad-trim reverse pdt-30" />
        <CONTACT />
      </div>
    </BaseLayout >
  );
}

export default App;
