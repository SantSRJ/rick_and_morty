import SearchBar from '../searchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'

export default function Nav({ onSearch }) {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">Favorites</Link>
        <SearchBar onSearch={onSearch}/>
    </div>
  );
}
