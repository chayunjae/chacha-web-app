import React, { useState } from "react";
import BaseLayout from "./components/BaseLayout";
import WhiteLogo from "./images/logo-white.png";
import BlackLogo from "./images/logo-black.png";

function App() {
  const [curPage, setCurPage] = useState<"INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT">('INDEX');
  const [globalTheme, setTheme] = useState(false)
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
        paddingTop: 90
      }}>
        <div className={`delay-view ${curPage === "ABOUT" && "show-box_view"}`}>
          <div className="time-font" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "16vw" }}>ABOUT.</div>
        </div>

        <div className={`delay-view ${curPage === "PROJECT" && "show-box_view"}`}>
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "16vw" }}>PROJECT.</div>
        </div>
        <div className={`delay-view ${curPage === "CONTACT" && "show-box_view"}`}>
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "16vw" }}>CONTACT.</div>
        </div>
        <div className={`delay-view ${curPage === "INDEX" && "show-box_view"}`}>
          <div style={{ width: 350 }}>
            <img alt="" style={{ width: "100%" }} src={globalTheme ? BlackLogo : WhiteLogo} />
          </div>

        </div>
      </div>
    </BaseLayout>
  );
}

export default App;
