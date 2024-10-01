import React, { useEffect } from "react";
import { useRecoilValue } from 'recoil';
import { themeState } from './theme/themeAtom';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './component/Home';

const App: React.FC = () => {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
