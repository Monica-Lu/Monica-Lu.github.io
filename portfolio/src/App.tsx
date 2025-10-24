import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, useTheme } from './components/ThemeToggle/ThemeProvider';
import '@radix-ui/themes/styles.css';
import { Navigate } from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar';
import './global.css';

// const Home = lazy(() => import('./components/Home/Home'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const ComingSoon = lazy(() => import('./components/ComingSoon/ComingSoon'));
const NotFound = lazy(() => import('./components/Page404/Page404'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const AppContent: React.FC = () => {
  const { theme } = useTheme();

    return (
      <Theme appearance={theme} >
        <Router>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
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
