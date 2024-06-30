import { useLayoutEffect, useState } from "react";
import Background from "./components/Background";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import PageContext from "./store/page";
import StageExp from "./components/StageExp";
import Education from "./components/Education";
import Gallery from "./components/Gallery";

function App() {
  const [page, setPage] = useState<Pages>("home");

  useLayoutEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];

    htmlTag.scrollTo(0, 0);
  });

  return (
    <PageContext.Provider value={[page, setPage]}>
      <Background />
      <Navigation />
      <Main />
      <StageExp />
      <Education />
      <Gallery />
    </PageContext.Provider>
  );
}

export default App;
