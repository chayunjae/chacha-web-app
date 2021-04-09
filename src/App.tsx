import React, { useEffect, useState } from "react";
import BaseLayout from "./components/BaseLayout";
import WhiteLogo from "./images/logo-white.png";
import BlackLogo from "./images/logo-black.png";
import ABOUT from './containers/About'
import PROJECT from './containers/Project'
import CONTACT from './containers/Contact'

function App() {
  const [curPage, setCurPage] = useState<"INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT">('PROJECT');
  const [globalTheme, setTheme] = useState(false)
  useEffect(() => {
    if (curPage !== "INDEX") {
      setTimeout(() => {
        const dom = document.getElementById("detail-dom cur-page")
        if (dom) {
          dom.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          dom.style.overflow = "hidden"
        }


      }, 2500)
    }
    return () => {
      document
        .getElementsByClassName("delay-view show-box_view")[0]
        .scrollTo(0, 0)
    }
  }, [curPage])
  return (
    <BaseLayout
      curPage={curPage}
      setCurPage={setCurPage}
      globalTheme={globalTheme}
      setTheme={setTheme}
    >

      <div style={{
        display: "flex",
        justifyContent: "center",
        // paddingTop: 90
      }}>
        <div id={`detail-dom ${curPage === "ABOUT" && "cur-page"}`} className={`delay-view ${curPage === "ABOUT" && "show-box_view"}`}>
          <ABOUT globalTheme={globalTheme} isAct={curPage} />
        </div>
        <div id={`detail-dom ${curPage === "PROJECT" && "cur-page"}`} className={`delay-view ${curPage === "PROJECT" && "show-box_view"}`}>
          <PROJECT globalTheme={globalTheme} isAct={curPage} />
        </div>
        <div id={`detail-dom ${curPage === "CONTACT" && "cur-page"}`} className={`delay-view ${curPage === "CONTACT" && "show-box_view"}`}>
          <CONTACT globalTheme={globalTheme} isAct={curPage} />
        </div>
        <div id={`detail-dom ${curPage === "INDEX" && "cur-page"}`} className={`delay-view ${curPage === "INDEX" && "show-box_view"}`}>
          <div className="main-box">
            <img alt="" src={globalTheme ? BlackLogo : WhiteLogo} />
          </div>

        </div>
      </div>
    </BaseLayout>
  );
}

export default App;
