import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionSlice';

function Missionlist(data) {
  const dispatch = useDispatch();
  const { mission } = data;

  return (
    <>
      <h3 className="mission-item">
        {mission.name}
      </h3>

      <p className="mission-item">
        {mission.description}
      </p>
      <p className="mission-item">
        <span className="span-badge">
          {mission.member ? 'Active Member' : 'Not A Member'}
        </span>
      </p>
      <p className="mission-item">
        <button type="button" className="btn-join" onClick={() => dispatch(joinMission(mission.id))}>
          {mission.member ? 'Leave Mission' : 'Join Mission'}
        </button>
      </p>

    </>
  );
}

export default Missionlist;
