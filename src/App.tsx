import React, { useContext } from "react";
import Fullpage from "./pages/Fullpage";
import Parallaxpage from "./pages/Parallaxpage";
import GlobalContext from "./utills/GlobalContext";
import GlobalNavigationBar from "./components/GlobalNavigationBar";

// 페이지 테마 교체 형식의 프로젝트
// theme 1 full page
// theme 2 parallax page
function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="App">
      <GlobalNavigationBar theme={theme} />
      {theme === "full" ? <Fullpage /> : <Parallaxpage />}
    </div>
  );
}

export default App;
