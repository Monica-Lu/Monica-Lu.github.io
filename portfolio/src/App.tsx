import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, useTheme } from './ThemeToggle/ThemeProvider';
import '@radix-ui/themes/styles.css';

import { NavBar } from './NavBar/NavBar';
import './index.css';

// const Home = lazy(() => import('./Home/Home'));
const AboutMe = lazy(() => import('./AboutMe/AboutMe'));
const Projects = lazy(() => import('./Projects/Projects'));
const ComingSoon = lazy(() => import('./ComingSoon/ComingSoon'));
const NotFound = lazy(() => import('./Page404/Page404'));
const Footer = lazy(() => import('./Footer/Footer'));

const AppContent: React.FC = () => {
  const { theme } = useTheme();

    return (
      <Theme appearance={theme} >
        <Router>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ComingSoon />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </Theme>
    );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
