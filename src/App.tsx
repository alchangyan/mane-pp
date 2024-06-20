import { useState } from 'react'
import Background from "./components/Background";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import PageContext from "./store/page";
import StageExp from './components/StageExp';
import Education from './components/Education';
import Contacts from './components/Contacts';

function App() {
  const [page, setPage] = useState<Pages>('home');

  return (
    <PageContext.Provider value={[page, setPage]}>
      <Background />
      <Navigation />
      <Main />
      <StageExp />
      <Education />
      <Contacts />
    </PageContext.Provider>
  );
}

export default App;
