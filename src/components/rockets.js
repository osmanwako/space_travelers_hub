import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketslice';
import RocketInformation from './rocketinfo';

const Rockets = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.rocketstore.load);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [load]);

  const {
    status, message, rockets,
  } = useSelector((state) => state.rocketstore);
  if (status === 'pending' || status === 'idle') {
    return <div className="grid-container">Loading ...</div>;
  }
  if (status === 'rejected' || status === 'idle') {
    return <div className="grid-container">{message}</div>;
  }
  return (
    <div className="grid-container">
      {
        rockets.map((rocket) => (<RocketInformation key={rocket.id} rocket={rocket} />))
      }
    </div>
  );
};

export default Rockets;
