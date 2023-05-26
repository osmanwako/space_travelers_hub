import { useSelector } from 'react-redux';

const Reserverocket = () => {
  const { rockets } = useSelector((state) => state.rocketstore);
  const reservelists = rockets.filter((rocket) => rocket.reserved === true);
  if (reservelists.length === 0) {
    return (
      <div className="myprofile-container">
        <div className="myprofile-item">
          You did not mission so far.
        </div>
      </div>
    );
  }

  return (
    <div className="myprofile-container">
      <h3>My Rockets</h3>
      {
                reservelists.map((reserve) => (<div className="myprofile-item" key={reserve.id}>{reserve.name}</div>))
            }
    </div>
  );
};
export default Reserverocket;
