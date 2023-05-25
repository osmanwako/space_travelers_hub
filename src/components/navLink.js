import { Route, Routes } from 'react-router-dom';
import Missions from './missions';
import MyProfile from './myProfile';
import Rockets from './rockets';

const Navigation = () => (
  <main className="app-container">
    <Routes>
      <Route path="/" element={<Rockets />} exact="true" />
      <Route path="/rockets" element={<Rockets />} exact="true" />
      <Route path="/missions" element={<Missions />} exact="true" />
      <Route path="/myProfile" element={<MyProfile />} exact="true" />
    </Routes>
  </main>
);

export default Navigation;
