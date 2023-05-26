import { useSelector } from 'react-redux';

const Joinedmission = () => {
  const { missions } = useSelector((state) => state.mission);
  const joinlists = missions.filter((mission) => mission.member === true);
  if (joinlists.length === 0) {
    return (
      <div className="myprofile-container">
        <div className="myprofile-item">
          You did not join any mission so far.
        </div>
      </div>
    );
  }

  return (
    <div className="myprofile-container">
      <h3>My Missions</h3>
      {
        joinlists.map((join) => (<div className="myprofile-item" key={join.id}>{join.name}</div>))
      }
    </div>
  );
};
export default Joinedmission;
