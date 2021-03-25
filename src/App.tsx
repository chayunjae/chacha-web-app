import React, { useState } from "react";
import BaseLayout from "./components/BaseLayout";
import WhiteLogo from "./images/logo-white.png";
import BlackLogo from "./images/logo-black.png";

function App() {
  const [curPage, setCurPage] = useState<"INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT">('INDEX');
  const [globalTheme, setTheme] = useState(false)
  function renderPage(page: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT") {
    switch (page) {
      case "ABOUT":
        return <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 90
        }}>
          <div style={{ width: 300 }} className={`delay-view ${page === "ABOUT" ? "show-box_view" : "hide-box_view"}`}>
            <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "3rem" }}>ABOUT</div>
          </div>
        </div>
      case "SKILLS":
        return <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 90
        }}>
          <div style={{ width: 300 }} className={`delay-view ${page === "SKILLS" ? "show-box_view" : "hide-box_view"}`}>
            <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "3rem" }}>SKILLS</div>
          </div>
        </div>
      case "PROJECT":
        return <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 90
        }}>
          <div style={{ width: 300 }} className={`delay-view ${page === "PROJECT" ? "show-box_view" : "hide-box_view"}`}>
            <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "3rem" }}>PROJECT</div>
          </div>
        </div>
      case "CONTACT":
        return <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 90
        }}>
          <div style={{ width: 300 }} className={`delay-view ${page === "CONTACT" ? "show-box_view" : "hide-box_view"}`}>
            <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "3rem" }}>CONTACT</div>
          </div>
        </div>
      default:
        return <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 90
        }}>
          <div style={{ width: 300 }}>
            <img alt="" style={{ width: "100%" }} src={globalTheme ? BlackLogo : WhiteLogo} />
          </div>
        </div>

    }
  }
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
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "6rem" }}>ABOUT.</div>
        </div>
        <div className={`delay-view ${curPage === "SKILLS" && "show-box_view"}`}>
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "6rem" }}>SKILLS.</div>
        </div>
        <div className={`delay-view ${curPage === "PROJECT" && "show-box_view"}`}>
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "6rem" }}>PROJECT.</div>
        </div>
        <div className={`delay-view ${curPage === "CONTACT" && "show-box_view"}`}>
          <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: "6rem" }}>CONTACT.</div>
        </div>
        <div className={`delay-view ${curPage === "INDEX" && "show-box_view"}`}>
          <img alt="" style={{ width: "100%" }} src={globalTheme ? BlackLogo : WhiteLogo} />
        </div>
      </div>
    </BaseLayout>
  );
}

export default App;
