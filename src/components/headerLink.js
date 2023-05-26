import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketslice';
import { fetchMissions } from '../redux/missions/missionSlice';
import logo from '../assets/planet.png';

const HeaderLink = () => {
  const rdispatch = useDispatch();
  const mdispatch = useDispatch();

  const rload = useSelector((state) => state.rocketstore.load);
  useEffect(() => {
    rdispatch(fetchRockets());
  }, [rload, rdispatch]);
  const mload = useSelector((state) => state.mission.load);
  useEffect(() => {
    mdispatch(fetchMissions());
  }, [mload, mdispatch]);
  return (
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
};

export default HeaderLink;
