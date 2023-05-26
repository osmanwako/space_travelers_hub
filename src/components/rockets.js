import { useSelector } from 'react-redux';
import RocketInformation from './rocketinfo';

const Rockets = () => {
  const {
    status, message, rockets,
  } = useSelector((state) => state.rocketstore);
  if (status === 'pending' || status === 'idle') {
    return <div className="rocket-container">Loading ...</div>;
  }
  if (status === 'rejected' || status === 'idle') {
    return <div className="rocket-container">{message}</div>;
  }
  return (
    <div className="rocket-container">
      {
        rockets.map((rocket) => (<RocketInformation key={rocket.id} rocket={rocket} />))
      }
    </div>
  );
};

export default Rockets;
