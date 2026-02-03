
import { useNavigate } from 'react-router-dom';

export default function NotFound(): React.JSX.Element {
    const navigate = useNavigate();

    return (
        <div className=" ">
            <h1>404</h1>
            <p>Page not found.</p>
            <button onClick={() => navigate('/')}>
                Return to Home
            </button>
        </div>
  );
}
