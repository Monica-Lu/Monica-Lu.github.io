
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className=" ">
            <h1>404</h1>
            <p>Page not found.</p>
            <button onClick={() => navigate(-1)}>
                Return to Previous Page
            </button>
        </div>
    );
};

export default NotFound;