import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PATHS } from './routePaths'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import PropertiesPage from '../pages/PropertiesPage';
import PropertyDetailPage from '../pages/PropertyDetailPage';
import ProjectsPage from '../pages/ProjectsPage';
import ScrollToTop from '../components/ui/ScrollToTop';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.ABOUT} element={<AboutPage />} />
        <Route path={PATHS.PROPERTY} element={<PropertiesPage />} />
        <Route path={PATHS.PROPERTY_DETAIL} element={<PropertyDetailPage />} />
        <Route path={PATHS.PROJECT} element={<ProjectsPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes