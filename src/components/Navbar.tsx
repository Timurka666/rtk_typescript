import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">Github</h3>
            <div className="links">
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </nav>
    );
}