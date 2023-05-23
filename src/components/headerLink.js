import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';

const HeaderLink = () => (
  <header className="nav-header">
    <nav className="nav-bar">
      <img src={logo} className="logo" alt="Space hub" />
      <Link className="nav-brand" to="./">Space Travelers&apos; Hub</Link>
    </nav>
    <ul className="nav-links">
      <li>
        <Link aria-current="page" className="nav-link active-link" to="./rockets">Rockets</Link>
      </li>
    </ul>
  </header>
);

export default HeaderLink;
