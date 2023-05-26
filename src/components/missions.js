import { useSelector } from 'react-redux';
import Missionlist from './Missionlist';

const Missions = () => {
  const {
    status, message, missions,
  } = useSelector((state) => state.mission);
  if (status === 'pending' || status === 'idle') {
    return <div className="mission-container">Loading ...</div>;
  }
  if (status === 'rejected' || status === 'idle') {
    return <div className="mission-container">{message}</div>;
  }
  return (
    <div className="mission-container">
      <h3 className="mission-item">
        Mission
      </h3>

      <h3 className="mission-item">
        Description
      </h3>
      <h3 className="mission-item">
        Status
      </h3>
      <p className="mission-item">
        {' '}
      </p>
      {
        missions.map((mission) => (<Missionlist key={mission.id} mission={mission} />))
      }
    </div>
  );
};

export default Missions;
