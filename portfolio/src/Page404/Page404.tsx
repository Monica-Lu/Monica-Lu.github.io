import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error (optional)
    console.error(`Page not found: ${location.pathname}`);
    
    // You could implement analytics tracking here
    // analytics.track('404 Error', { path: location.pathname });
    
    // Set document title
    document.title = "404 - Not Found";
  }, [location]);

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page not found.</p>
      <button onClick={() => navigate('/')}>
        Return to Home
      </button>
    </div>
  );
}

export const meta = {
  title: "Not found",
  description: "Page not found",
};