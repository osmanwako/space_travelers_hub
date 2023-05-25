import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const HeaderLink = () => (
  <header className="nav-header">
    <nav className="nav-bar">
      <img src={logo} className="logo" alt="Space hub" />
      <NavLink className="nav-brand" to="/">Space Travelers&apos; Hub</NavLink>
    </nav>
    <ul className="nav-links">
      <li>
        <NavLink
          exact="true"
          className="nav-link"
          to="/rockets"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          exact="true"
          className="nav-link"
          to="/missions"
        >
          Missions
        </NavLink>
      </li>
      <li className="link-mid" />
      <li>
        <NavLink
          exact="true"
          className="nav-link"
          to="/myprofile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </header>
);

export default HeaderLink;
