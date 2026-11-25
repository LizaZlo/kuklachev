import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages/main/main';
import { AfishaPage } from '../pages/afisha/afisha';
import { ExcursionsPage } from '../pages/excursions-page/excursions-page';
import { AboutPage } from '../pages/about/about';
import { SpecialProjectPage } from '../pages/special-project/special-project';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/afisha" element={<AfishaPage />} />
        <Route path="/excursions" element={<ExcursionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/special-project" element={<SpecialProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};