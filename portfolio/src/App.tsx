// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Theme } from '@radix-ui/themes';
// import { ThemeProvider, useTheme } from './ThemeToggle/ThemeProvider';
// import '@radix-ui/themes/styles.css';

// import { NavBar } from './NavBar/NavBar';
// import './index.css';

// // const Home = lazy(() => import('./Home/Home'));
// const AboutMe = lazy(() => import('./AboutMe/AboutMe'));
// const Projects = lazy(() => import('./Projects/Projects'));
// const ComingSoon = lazy(() => import('./ComingSoon/ComingSoon'));
// const NotFound = lazy(() => import('./Page404/Page404'));
// const Footer = lazy(() => import('./Footer/Footer'));

// const AppContent: React.FC = () => {
//   const { theme } = useTheme();

//     return (
//       <Theme appearance={theme} >
//         <Router>
//           <NavBar />
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route path="/" element={<ComingSoon />} />
//               <Route path="/aboutme" element={<AboutMe />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Suspense>
//           <Footer />
//         </Router>
//       </Theme>
//     );
// }

// export default function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }

import { useState } from 'react'
import reactLogo from '../react.svg'
import viteLogo from '../vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App